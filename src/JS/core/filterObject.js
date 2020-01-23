import filterObject from "core/filterObject";
import nanoid from "nanoid";
export let EscapeFilteration = nanoid();

function syncFilterObject(object, filterer, path) {
	if (object.constructor === Array) {
		for (const [index, value] of object.entries()) {
			const isWanted = filterer({
				key: index,
				value: value,
				path: path
			});
			if (!isWanted) {
				const unwantedItemIndex = object.indexOf(value);
				if (unwantedItemIndex !== -1) object.splice(unwantedItemIndex, 1);
			}
		}
	} else {
		for (const param in object) {
			if (
				object[param].constructor === Object ||
				object[param].constructor === Array
			) {
				const pathCurrent = path.concat([param]);
				const isWanted = filterer({
					key: param,
					value: object[param],
					path: path
				});
				if (!isWanted) {
					delete object[param];
				} else if (isWanted !== EscapeFilteration) {
					const filteredChildObject = filterObject(
						object[param],
						filterer,
						false,
						pathCurrent
					);
					if (Object.keys(filteredChildObject).length > 0) {
						object[param] = filteredChildObject;
					} else {
						delete object[param];
					}
				}
			} else {
				const isWanted = filterer({
					key: param,
					value: object[param],
					path: path
				});
				if (!isWanted) {
					delete object[param];
				}
			}
		}
	}
	return object;
}

async function asyncFilterObject(object, filterer, path) {
	if (object.constructor === Array) {
		for (const [index, value] of object.entries()) {
			const isWanted = await filterer({
				key: index,
				value: value
			});
			if (!isWanted) {
				const unwantedItemIndex = object.indexOf(value);
				if (unwantedItemIndex !== -1) object.splice(unwantedItemIndex, 1);
			}
		}
	} else {
		for (const param in object) {
			if (
				object[param].constructor === Object ||
				object[param].constructor === Array
			) {
				const pathCurrent = path.concat([param]);
				const isWanted = await filterer({
					key: param,
					value: object[param],
					path: path
				});
				if (!isWanted) {
					delete object[param];
				} else if (isWanted !== EscapeFilteration) {
					const filteredChildObject = await filterObject(
						object[param],
						filterer,
						true,
						pathCurrent
					);
					if (Object.keys(filteredChildObject).length > 0) {
						object[param] = filteredChildObject;
					} else {
						delete object[param];
					}
				}
			} else {
				const isWanted = await filterer({
					key: param,
					value: object[param],
					path: path
				});
				if (!isWanted) {
					delete object[param];
				}
			}
		}
	}
	return object;
}

export default function(object, filterer, isAsync, path = []) {
	if (isAsync) {
		return asyncFilterObject(object, filterer, path);
	} else {
		return syncFilterObject(object, filterer, path);
	}
}
