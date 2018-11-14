// RiveScript.js
// https://www.rivescript.com/

// This code is released under the MIT License.
// See the "LICENSE" file for more information.

"use strict";

/**
Miscellaneous utility functions.
*/

/**
string strip (string)

Strip extra whitespace from both ends of the string, and remove
line breaks anywhere in the string.
*/
export function strip (text) {
	text = text.replace(/^[\s\t]+/, "").replace(/[\s\t]+$/, "").replace(/[\x0D\x0A]+/, "");
	return text;
};

/**
string trim (string)

Compatible implementation of `String.prototype.trim()`. Strips whitespace
from the beginning and end of the string, but doesn't remove any
whitespace inside the string like `strip()` does.
*/
export function trim (text) {
	text = text.replace(/^[\x0D\x0A\s\t]+/, "").replace(/[\x0D\x0A\s\t]+$/, "");
	return text;
};

/**
void extend (object a, object b)

Combine the properties of both objects into one. The properties from
object 'b' are inserted into 'a'.
*/
export function extend (a, b) {
	var attr, results, value;
	results = [];
	for (attr in b) {
		value = b[attr];
		if (!b.hasOwnProperty(attr)) {
			continue;
		}
		results.push(a[attr] = value);
	}
	return results;
};

/**
int word_count (string)

Count the number of real words in a string.
*/
export function word_count (trigger, all) {
	var i, len, wc, word, words;
	words = [];
	if (all) {
		words = trigger.split(/\s+/);
	} else {
		words = trigger.split(/[\s\*\#_\|]+/);
	}
	wc = 0;
	for (i = 0, len = words.length; i < len; i++) {
		word = words[i];
		if (word.length > 0) {
			wc++;
		}
	}
	return wc;
};

/**
string quotemeta (string)

Escape a string for a regexp.
*/
export function quotemeta (string) {
	var char, i, len, unsafe;
	unsafe = "\\.+*?[^]$(){}=!<>|:".split("");
	for (i = 0, len = unsafe.length; i < len; i++) {
		char = unsafe[i];
		string = string.replace(new RegExp(`\\${char}`, "ig"), `\\${char}`);
	}
	return string;
};

/**
bool isAtomic (string trigger)

Determine whether a trigger is atomic.
*/
export function isAtomic (trigger) {
	var i, len, ref, special;
	ref = ["*", "#", "_", "(", "[", "<", "@"];
	// Atomic triggers don't contain any wildcards or parenthesis or anything of
	// the sort. We don't need to test the full character set, just left brackets
	// will do.
	for (i = 0, len = ref.length; i < len; i++) {
		special = ref[i];
		if (trigger.indexOf(special) > -1) {
			return false;
		}
	}
	return true;
};

/**
string stringFormat (string type, string)

Formats a string according to one of the following types:
- formal
- sentence
- uppercase
- lowercase
*/
export function stringFormat (type, string) {
	var first, i, len, result, word, words;
	if (type === "uppercase") {
		return string.toUpperCase();
	} else if (type === "lowercase") {
		return string.toLowerCase();
	} else if (type === "sentence") {
		string += "";
		first = string.charAt(0).toUpperCase();
		return first + string.substring(1);
	} else if (type === "formal") {
		words = string.split(/\s+/);
		result = [];
		for (i = 0, len = words.length; i < len; i++) {
			word = words[i];
			first = word.charAt(0).toUpperCase();
			result.push(first + word.substring(1));
		}
		return result.join(" ");
	}
	return content;
};

/**
[]string parseCallArgs

Parse a string and return shell-like arguments as an array. Normally this
means each word in the string becomes an item in the result, but quoted
sections of the input will come back as a single item.

Example:

```javascript
console.log( parseCallArgs('please google "writing chat bot"'));
// ["please", "google", "writing chat bot"]
```
*/
export function parseCallArgs (str) {
	var buff, c, doubleQuoteRe, flushBuffer, i, insideAString, len, result, spaceRe;
	result = [];
	buff = "";
	insideAString = false;
	spaceRe = /\s/ig;
	doubleQuoteRe = /"/ig;
	flushBuffer = function() {
		if (buff.length !== 0) {
			result.push(buff);
		}
		return buff = "";
	};
	for (i = 0, len = str.length; i < len; i++) {
		c = str[i];
		if (c.match(spaceRe) && !insideAString) {
			flushBuffer();
			continue;
		}
		if (c.match(doubleQuoteRe)) {
			if (insideAString) {
				flushBuffer();
			}
			insideAString = !insideAString;
			continue;
		}
		buff += c;
	}
	flushBuffer();
	return result;
};

/**
object clone (object)

Clone an object.
*/
export function clone (obj) {
	var copy, key;
	if (obj === null || typeof obj !== "object") {
		return obj;
	}
	copy = obj.constructor();
	for (key in obj) {
		if (!obj.hasOwnProperty(key)) {
			continue;
		}
		copy[key] = clone(obj[key]);
	}
	return copy;
};

/**
int nIndexOf (string, string match, int index)

Finds a match in a string at a given index

Usage:
string = "My name is Rive"
match = " "
index = 2
return = 7

Summary: It will look for a second space in the string
*/
export function nIndexOf (string, match, index) {
	return string.split(match, index).join(match).length;
};
