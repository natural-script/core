export default function evalCode(code) {
    let finalCode = '';
    if (code) {
        if (code.constructor == Object) {
            for (let i in code) {
                finalCode += i;
                finalCode += '\n';
                if (code[i].constructor != String) {
                    finalCode += evalCode(code[i])
                }
            }
        } else if (code.constructor == Array) {
            for (let i of code) {
                if (i.constructor == Object) {
                    for (let k in i) {
                        finalCode += k;
                        finalCode += '\n';
                        if (i[k].constructor != String) {
                            finalCode += evalCode(i[k])
                        }
                    }
                }
                if (i.constructor == String) {
                    finalCode += i;
                    finalCode += '\n';
                }
            }
        }
    }
    return finalCode;
}