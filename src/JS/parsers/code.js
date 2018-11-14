import analyze from 'core/analyzer'
import nanoid from 'nanoid'
export default function evalCode(code, previousScopes) {
	let finalCode = '';
	if (code) {
		if (code.constructor == Object) {
			for (let i in code) {
				const data = analyze(i)
				if (data) {
					finalCode += `${data.prefix}\n`;
					if (code[i].constructor != String) {
						let currentScope;
						if (data.isScope) {
							if (previousScopes) {
								previousScopes.push(nanoid(10))
								currentScope = previousScopes
							} else {
								currentScope = [nanoid(10)]
							}
							finalCode += `let scopes = ${JSON.stringify(currentScope.reverse())};`
						}
						if (data.varName) {
							finalCode += `NS.variables[scopes[0]] = (NS.variables[scopes[0]] != undefined) ? NS.variables[scopes[0]] : {};`
							finalCode += `NS.variables[scopes[0]].${data.varName} = ${data.varName};`
						}
						finalCode += evalCode(code[i], currentScope)
						finalCode += `${data.suffix}\n`
					}
				} else {
					finalCode += ''
					console.error(`${i} is written in an invalid syntax. For getting more familiar with NaturalScript syntax, please refer to its docs at: https://project-jste.github.io/docs`)
				}
			}
		} else if (code.constructor == Array) {
			for (let i of code) {
				if (i.constructor == Object) {
					for (let k in i) {
						const data = analyze(k)
						if (data) {
							finalCode += `${data.prefix}\n`;
							if (i[k].constructor != String) {
								let currentScope;
								if (data.isScope) {
									if (previousScopes) {
										previousScopes.push(nanoid(10))
										currentScope = previousScopes
									} else {
										currentScope = [nanoid(10)]
									}
									finalCode += `let scopes = ${JSON.stringify(currentScope.reverse())};`
								}
								if (data.varName) {
									finalCode += `NS.variables[scopes[0]] = (NS.variables[scopes[0]] != undefined) ? NS.variables[scopes[0]] : {};`
									finalCode += `NS.variables[scopes[0]].${data.varName} = ${data.varName};`
								}
								finalCode += evalCode(i[k], currentScope)
								finalCode += `${data.suffix}\n`
							}
						} else {
							finalCode += ''
							console.error(`${k} is written in an invalid syntax. For getting more familiar with NaturalScript syntax, please refer to its docs at: https://project-jste.github.io/docs`)
						}
					}
				}
				if (i.constructor == String) {
					const data = analyze(i)
					if (data) {
						finalCode += data
						finalCode += '\n'
					} else {
						finalCode += ''
						console.error(`${i} is written in an invalid syntax. For getting more familiar with NaturalScript syntax, please refer to its docs at: https://project-jste.github.io/docs`)
					}
				}
			}
		}
	}
	return finalCode;
}