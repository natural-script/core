import mapObject from "core/mapObject";
import nanoid from "nanoid";
export let EscapeMapping = nanoid();
export let ContinueDeepper = nanoid();

function syncMapObject(object, mapper, { byKey = false, autoDigger = true }) {
	if (object.constructor === Array) {
		for (const [index, value] of object.entries()) {
			object[index] = mapper({
				key: index,
				value: value
			});
		}
	} else {
		for (const param in object) {
			if (
				object[param].constructor === Object ||
				object[param].constructor === Array
			) {
				if (byKey) {
					const mappedKey = mapper({
						key: param,
						value: object[param]
					});
					object[mappedKey] = mapObject(object[param], mapper, {
						byKey: true
					});
					delete object[param];
				} else {
					if (!autoDigger) {
						const mappedValue = mapper({
							key: param,
							value: object[param]
						});
						if (mappedValue === ContinueDeepper) {
							object[param] = mapObject(object[param], mapper);
						} else if (mappedValue && mappedValue !== EscapeMapping) {
							object[param] = mappedValue;
						} else {
							object[param] = mapObject(object[param], mapper);
						}
					}
				}
			} else {
				if (byKey) {
					const mappedKey = mapper({
						key: param,
						value: object[param]
					});
					if (mappedKey !== param) {
						object[mappedKey] = object[param];
						delete object[param];
					}
				} else {
					object[param] = mapper({
						key: param,
						value: object[param]
					});
				}
			}
		}
	}
	return object;
}

async function asyncMapObject(
	object,
	mapper,
	{ byKey = false, autoDigger = true }
) {
	if (object.constructor === Array) {
		for (const [index, value] of object.entries()) {
			object[index] = await mapper({
				key: index,
				value: value
			});
		}
	} else {
		for (const param in object) {
			if (
				object[param].constructor === Object ||
				object[param].constructor === Array
			) {
				if (byKey) {
					const mappedKey = await mapper({
						key: param,
						value: object[param]
					});
					object[mappedKey] = await mapObject(object[param], mapper, {
						isAsync: true,
						byKey: true
					});
					delete object[param];
				} else {
					if (!autoDigger) {
						const mappedValue = await mapper({
							key: param,
							value: object[param]
						});
						if (mappedValue === ContinueDeepper) {
							object[param] = mapObject(object[param], mapper, {
								isAsync: true
							});
						} else if (mappedValue && mappedValue !== EscapeMapping) {
							object[param] = mappedValue;
						} else {
							object[param] = mapObject(object[param], mapper, {
								isAsync: true
							});
						}
					}
				}
			} else {
				if (byKey) {
					const mappedKey = await mapper({
						key: param,
						value: object[param]
					});
					if (mappedKey !== param) {
						object[mappedKey] = object[param];
						delete object[param];
					}
				} else {
					object[param] = await mapper({
						key: param,
						value: object[param]
					});
				}
			}
		}
	}
	return object;
}

export default function(object, mapper, opts = {}) {
	if (opts.isAsync) {
		return asyncMapObject(object, mapper, {
			...opts
		});
	} else {
		return syncMapObject(object, mapper, {
			...opts
		});
	}
}
