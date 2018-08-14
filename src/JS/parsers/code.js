import {analyze} from 'core/analyzer'
export default async function evalCode (code) {
    let finalCode = '';
    if (code) {
        if (code.constructor == Object) {
            for (let i in code) {
                const data = await analyze(i)
                finalCode += `${data.prefix}\n`;
                if (code[i].constructor != String) {
                    finalCode += await evalCode(code[i])
                    finalCode += `${data.suffix}\n`
                }
            }
        } else if (code.constructor == Array) {
            for (let i of code) {
                if (i.constructor == Object) {
                    for (let k in i) {
                        const data = await analyze(k)
                        console.log(data)
                        finalCode += `${data.prefix}\n`;
                        if (i[k].constructor != String) {
                            finalCode += await evalCode(i[k])
                            finalCode += `${data.suffix}\n`
                        }
                    }
                }
                if (i.constructor == String) {
                    finalCode += await analyze(i);
                    finalCode += '\n';
                }
            }
        }
    }
    return finalCode;
}