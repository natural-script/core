/*!
 * List Parser
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2019-02-24
 */
import parseStringValue from "./stringValue";
export default function parseList(text, scopes, parentFnParams) {
  text = parseStringValue(text, false, scopes, parentFnParams);
  let re1 = /(^(\d)\. (?:(.*?):\n(\t+)(.*?)(?=^[^\t]|$(?![\r\n]))|(.*?))(?=^\d|$(?![\r\n])))+/gims;
  let re2 = /^(\d)\. (?:(.*?):\n(\t+)(.*?)(?=^[^\t]|$(?![\r\n]))|(.*?))(?=^\d|$(?![\r\n]))/gims;
  let re3 = /^(\d)\. (.*?):\n(\t+)(.*?)(?=^[^\t]|$(?![\r\n]))/ims;
  let re4 = /^(\d)\. (.*)/ims;
  let re5 = /(^\* (?:(.*?):\n(\t+)(.*?)(?=^[^\t]|$(?![\r\n]))|(.*?): (.*?))(?=^\*|$(?![\r\n])))+/gims;
  let re6 = /^\* (?:(.*?):\n(\t+)(.*?)(?=^[^\t]|$(?![\r\n]))|(.*?): (.*?))(?=^\*|$(?![\r\n]))/gims;
  let re7 = /^\* (.*?):\n(\t+)(.*?)(?=^[^\t]|$(?![\r\n]))/ims;
  let re8 = /^\* (.*?): (.*)/ims;
  let re9 = /(?:^(\t*)(?:((\d)\. (?:(.*?):\n(\t+)(.*?)(?=^[^\t]|$(?![\r\n]))|(.*?))(?=^\d|$(?![\r\n])))|(\* (?:(.*?):\n(\t+)(.*?)(?=^[^\t]|$(?![\r\n]))|(.*?): (.*?))(?=^\*|$(?![\r\n]))))$(?:\n|))+/ims;
  if (re9.test(text)) {
    text = text.replace(new RegExp(`^${re9.exec(text)[1]}`, "gm"), "");
    let output;
    if (re1.test(text)) {
      output = [];
      text.match(re2).forEach(item => {
        if (re3.test(item)) {
          const groups = re3.exec(item);
          output[parseInt(groups[1]) - 1] = {
            [groups[2]]: parseList(
              groups[4].replace(new RegExp(`^${groups[3]}`, "gm"), "")
            )
          };
        } else if (re4.test(item)) {
          const groups = re4.exec(item);
          output[parseInt(groups[1]) - 1] = groups[2].replace(/\n/g, "");
        }
      });
    } else if (re5.test(text)) {
      output = {};
      text.match(re6).forEach(item => {
        if (re7.test(item)) {
          const groups = re7.exec(item);
          output[groups[1]] = parseList(
            groups[3].replace(new RegExp(`^${groups[2]}`, "gm"), "")
          );
        } else if (re8.test(item)) {
          const groups = re8.exec(item);
          output[groups[1]] = groups[2].replace(/\n/g, "");
        }
      });
    }
    return output;
  } else {
    return text;
  }
}
