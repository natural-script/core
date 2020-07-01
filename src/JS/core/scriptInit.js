/*!
 * Script Initialization
 * https://project-jste.github.io/
 *
 * Copyright 2018 Jste Team
 * Released under the GNU AGPLv3 license
 * https://project-jste.github.io/license
 *
 * Date: 2018-05-01
 */
import "core/initJsteFirebase";
import "core/wordsTranslationsInit";
import "core/punctuationAndArticleRemover";
import applyOp from "core/applyOp";
import theComponentCalled from "core/theComponentCalled";
import Modernizr from "modernizr";
import annyang from "annyang";
import isReachable from "is-reachable";
import indetationParser from "parsers/indentation.pegjs";
import evalCode from "parsers/code";
import * as NSStore from "core/NSStore";
import manageComponent from "core/manageComponent";
import parseStringValue from "parsers/stringValue";
import getTranslations from "core/getTranslations";
import getVar from "core/getVar";
import setVar from "core/setVar";
import analyze from "core/analyzer";
import { normalTxtOperatorTranslations } from "core/analyzer";
import { commandUtilsDB } from "core/analyzer";
import beautify from "js-beautify";
import * as declarations from "core/declarations";
const runCommand = require.context("commands", true, /\.js$/);
window.scriptInit = async function() {
  let naturalCode, structuredCode;
  var meta = document.createElement("meta");
  meta.name = "viewport";
  meta.setAttribute(
    "content",
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
  );
  document.getElementsByTagName("head")[0].appendChild(meta);
  var rawCode = $(`jste`).text();
  rawCode = rawCode.replace(/^(?:[\t ]*(?:\r?\n|\r))+/gim, ``);
  rawCode = rawCode.replace(/^/gim, `\t`);
  rawCode = rawCode.replace(/\s+$(?!\n)/gm, "");
  /*if (navigator.onLine) {
    let managerIsReachable = await isReachable(
      "https://jste-manager.herokuapp.com/autoCorrect"
    );
    if (managerIsReachable) {
      var codeChunks = rawCode.match(
        /^(.|[\r\n]){0,10000}((,|\.)$|$(?!\n))/gim
      );
      rawCode = "";
      for (var i = 0; i < codeChunks.length; i++) {
        rawCode +=
          "\n" +
          (await $.ajax({
            url: "https://jste-manager.herokuapp.com/autoCorrect",
            method: "POST",
            data: {
              lang:
                declarations.langCode == "arz" ? "ar" : declarations.langCode,
              input: codeChunks[i]
            }
          }));
      }
    }
  }*/
  var codePrefix =
    "jQuery(document).ready(\nfunction ($) {let elementName; let scopes = []; let parentFnParams = [];";
  var code = rawCode;
  naturalCode = code;
  code = `start:\n${code}`;
  code = code.replace(/^(?:[\t ]*(?:\r?\n|\r))+/gim, ``);
  code = XRegExp.replace(
    code,
    XRegExp(`<< (${normalTxtOperatorTranslations.join("|")}) >>`, "gmi"),
    function(match, p1, offset, string) {
      return `NORMALTEXTPREFIX${btoa(
        analyze(p1).text.replace(/\n/gim, " ")
      )}NORMALTEXTSUFFIX`;
    }
  );
  if (declarations.isRTL) {
    $(`html`)
      .attr(`dir`, `rtl`)
      .attr(`declarations.langID`, `ar`);
  }
  if (Modernizr.speechrecognition) {
    if (declarations.langID == 0) {
      annyang.setLanguage(`en-GB`);
    } else if (declarations.langID == 1) {
      annyang.setLanguage(`en-US`);
    } else if (declarations.langID == 2) {
      annyang.setLanguage(`fr-FR`);
    } else if (declarations.langID == 3) {
      annyang.setLanguage(`ar-AE`);
    } else if (declarations.langID == 4) {
      annyang.setLanguage(`ar-EG`);
    }
  }
  indetationParser.commandUtils = `(${commandUtilsDB.join("|")})`;
  structuredCode = indetationParser.parse(code).start;
  code = evalCode(structuredCode);
  code = `${codePrefix}\n${code}\n});`;
  $(`jste`).remove();
  document.body.innerHTML = `<div id="root"></div>`;
  console.groupCollapsed("Source Code");
  console.groupCollapsed("Natural Syntax");
  console.log(naturalCode);
  console.groupEnd();
  console.groupCollapsed("Structured Syntax");
  console.log(structuredCode);
  console.groupEnd();
  console.groupCollapsed("Compiled Syntax");
  console.log(beautify.js(code));
  console.groupEnd();
  console.groupEnd();
  window.manageComponent = manageComponent;
  window.parseStringValue = parseStringValue;
  window.getTranslations = getTranslations;
  window.getVar = getVar;
  window.setVar = setVar;
  window.NSStore = NSStore;
  window.theComponentCalled = theComponentCalled;
  window.applyOp = applyOp;
  window.runCommand = runCommand;
  window.$ = jQuery;
  window.jQuery = jQuery;
  eval(code);
};
$(
  (function() {
    $(function() {
      setTimeout(function() {
        if (declarations.langID != null) {
          window.scriptInit();
        }
      }, 100);
    });
  })(jQuery)
);
