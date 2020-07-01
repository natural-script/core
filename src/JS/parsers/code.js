import analyze from "core/analyzer";
import { nanoid } from "nanoid";
export default function evalCode(code, previousScopes, topic) {
  let finalCode = "";
  if (code) {
    if (code.constructor == Object) {
      for (let i in code) {
        const data = analyze(i, topic);
        if (data) {
          finalCode += `${data.prefix}\n`;
          if (code[i].constructor != String) {
            let currentScope;
            if (data.isScope) {
              if (previousScopes) {
                previousScopes.push(nanoid(10));
                currentScope = previousScopes;
              } else {
                currentScope = [nanoid(10)];
              }
              finalCode += `let scopes = ${JSON.stringify(
                currentScope.reverse()
              )};`;
              if (data.elementName) {
                finalCode += `let elementName = parseStringValue("${
                  data.elementName
                }", false, scopes, parentFnParams);`;
              }
            }
            if (data.varName) {
              finalCode += `setVar("${data.varName}", ${
                data.varName
              }, scopes, parentFnParams);`;
            }
            finalCode += evalCode(code[i], currentScope, data.topic);
            finalCode += `${data.suffix}\n`;
          }
        } else {
          finalCode += "";
          console.error(
            `${i} is written in an invalid syntax. For getting more familiar with NaturalScript syntax, please refer to its docs at: https://project-jste.github.io/docs`
          );
        }
      }
    } else if (code.constructor == Array) {
      for (let i of code) {
        if (i.constructor == Object) {
          for (let k in i) {
            const data = analyze(k, topic);
            if (data) {
              finalCode += `${data.prefix}\n`;
              if (i[k].constructor != String) {
                let currentScope;
                if (data.isScope) {
                  if (previousScopes) {
                    previousScopes.push(nanoid(10));
                    currentScope = previousScopes;
                  } else {
                    currentScope = [nanoid(10)];
                  }
                  finalCode += `let scopes = ${JSON.stringify(
                    currentScope.reverse()
                  )};`;
                  if (data.elementName) {
                    finalCode += `let elementName = parseStringValue("${
                      data.elementName
                    }", false, scopes, parentFnParams);`;
                  }
                }
                if (data.varName) {
                  finalCode += `setVar("${data.varName}", ${
                    data.varName
                  }, scopes, parentFnParams);`;
                }
                finalCode += evalCode(i[k], currentScope, data.topic);
                finalCode += `${data.suffix}\n`;
              }
            } else {
              finalCode += "";
              console.error(
                `${k} is written in an invalid syntax. For getting more familiar with NaturalScript syntax, please refer to its docs at: https://project-jste.github.io/docs`
              );
            }
          }
        }
        if (i.constructor == String) {
          const data = analyze(i, topic);
          if (data) {
            finalCode += data;
            finalCode += "\n";
          } else {
            finalCode += "";
            console.error(
              `${i} is written in an invalid syntax. For getting more familiar with NaturalScript syntax, please refer to its docs at: https://project-jste.github.io/docs`
            );
          }
        }
      }
    }
  }
  return finalCode;
}
