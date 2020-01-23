/*!
 * String Value Parser
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-04-22
 */
import analyze from "core/analyzer";
import parseMathExp from "parsers/mathExp";
import dotProp from "dot-prop";
import parseStringValue from "./stringValue";
import { components, variables } from "core/NSStore";
import mapObject from "core/mapObject";
import clone from "clone";
export default function(text, isDynamic, scopes, parentFnParams) {
  let mode;
  let dynamicDataPaths = [];
  if (isDynamic) {
    mode = "DYNAMIC";
  } else {
    mode = "STATIC";
  }
  if (
    text.constructor === Object ||
    text.constructor === Array ||
    text ||
    text === ""
  ) {
    let result;
    if (text.constructor === Object) {
      result = mapObject(clone(text), ({ value }) => {
        if (isDynamic) {
          const data = parseStringValue(
            value,
            isDynamic,
            scopes,
            parentFnParams
          );
          dynamicDataPaths = dynamicDataPaths.concat(data.dynamicDataPaths);
          return data.result;
        } else {
          return parseStringValue(value, isDynamic, scopes, parentFnParams);
        }
      });
    } else if (text.constructor === Array) {
      result = clone(text).map(value =>
        parseStringValue(value, isDynamic, scopes, parentFnParams)
      );
    } else if (text.constructor === Boolean) {
      result = text;
    } else if (text || text === "") {
      const staticOperatorTemplate = /<< ((?:(?:(?!<<|>>).)*?<<.*?>>(?:(?!<<|>>).)*?)*?|.*?) >>/gim;
      const dynamicOperatorTemplate = /<\*< ((?:(?:(?!<\*<|>\*>).)*?<\*<.*?>\*>(?:(?!<\*<|>\*>).)*?)*?|.*?) >\*>/gim;
      text = text.replace(
        mode === "DYNMAIC" ? dynamicOperatorTemplate : staticOperatorTemplate,
        function(match, p1) {
          return `NS${mode}OPERATORPREFIX${JSON.stringify(
            analyze(p1)
          )}NS${mode}OPERATORSUFFIX`;
        }
      );
      result = text.replace(
        new RegExp(
          `NS${mode}OPERATORPREFIX(.*?)NS${mode}OPERATORSUFFIX`,
          "gmi"
        ),
        function(match, data, offset, string) {
          data = JSON.parse(data);
          if (data.id == "O20") {
            const varsStore = variables.getState();
            let variablePath = parseStringValue(
              data.variablePath,
              false,
              scopes,
              parentFnParams
            ).split(" => ");
            if (parseInt(data.item)) {
              variablePath.push(parseInt(data.item) - 1);
            }
            variablePath = variablePath.join(".");
            const parentVariable = variablePath.split(".")[0];
            let variableValue;
            for (const scope of scopes) {
              if (dotProp.has(varsStore, `${scope}.${parentVariable}`)) {
                variableValue = dotProp.get(varsStore[scope], variablePath);
              }
            }
            if (dotProp.has(varsStore.global, parentVariable)) {
              variableValue = dotProp.get(varsStore.global, variablePath);
            }
            if (variableValue.constructor == Object) {
              return JSON.stringify(variableValue);
            } else {
              return variableValue.toString();
            }
          }
          if (data.id == "O21") {
            return parseMathExp(
              parseStringValue(
                data.expression,
                isDynamic,
                scopes,
                parentFnParams
              )
            );
          }
          if (["O1", "O2", "O3", "O4", "O5", "O6"].indexOf(data.id) == 0) {
            var prefix, suffix;
            if (data.id == "O1") {
              prefix = "<b>";
              suffix = "</b>";
            }
            if (data.id == "O2") {
              prefix = "<i>";
              suffix = "</i>";
            }
            if (data.id == "O3") {
              prefix = "<u>";
              suffix = "</u>";
            }
            if (data.id == "O4") {
              prefix = "<b><i>";
              suffix = "</b></i>";
            }
            if (data.id == "O5") {
              prefix = "<b><u>";
              suffix = "</b></u>";
            }
            if (data.id == "O6") {
              prefix = "<u><i>";
              suffix = "</u></i>";
            }
            if (data.id == "O20") {
              prefix = "<b><i><u>";
              suffix = "</b></i></u>";
            }
            return (
              prefix +
              parseStringValue(data.text, isDynamic, scopes, parentFnParams) +
              suffix
            );
          }
          if (data.id == "O12") {
            return `<i class='fas fa-$1' aria-hidden='true'>${data.icon}</i>`;
          }
          if (data.id == "O13") {
            return "<br />";
          }
          if (data.id == "O17") {
            return `<span id="${data.name}">${parseStringValue(
              data.text,
              isDynamic,
              scopes,
              parentFnParams
            )}</span>`;
          }
          if (data.id == "O18") {
            return parentFnParams[data.param];
          }
          if (data.id == "O22") {
            return $("body")
              .find(`#${data.dropdownMenuName}`)
              .children()[parseInt(data.item) - 1].id;
          }
          if (data.id == "O8") {
            return screen.availHeight;
          }
          if (data.id == "O9") {
            return screen.availWidth;
          }
          if (data.id == "O10") {
            return screen.height;
          }
          if (data.id == "O11") {
            return screen.width;
          }
          if (data.id == "O14") {
            if (isDynamic) {
              dynamicDataPaths.push(
                `components["${data.elementName}"].internalData.value`
              );
              return dotProp.get(
                components.getState(),
                `${data.elementName}.internalData.value`
              );
            } else {
              return dotProp.get(
                components.getState(),
                `${data.elementName}.internalData.value`
              );
            }
          }
          if (data.id == "O15") {
            return window.NS.user.displayName;
          }
          if (data.id == "O16") {
            return window.NS.user.email;
          }
          if (data.id == "O23") {
            return window.NS.user.uid;
          }
        }
      );
    }
    if (isDynamic) {
      return { result, dynamicDataPaths };
    } else {
      return result;
    }
  }
  return null;
}
