import randomColor from "randomcolor";
import getTranslations from "core/getTranslations";
import * as declarations from "core/declarations";
import * as palette from "@material-ui/core/colors";
export default function(propVal) {
	if (propVal.findBestMatch(window.wordsTranslationsDB.Words["aRandomColor"][declarations.langCode]).rating > 0.8) {
		return randomColor({
			hue: "random",
			luminosity: "random"
		});
	} else if (propVal.findBestMatch(window.wordsTranslationsDB.Words["aRandomLightColor"][
			declarations.langCode
		]).rating > 0.8) {
		return randomColor({
			hue: "random",
			luminosity: "light"
		});
	} else if (propVal.findBestMatch(window.wordsTranslationsDB.Words["aRandomDarkColor"][
			declarations.langCode
		]).rating > 0.8) {
		return randomColor({
			hue: "random",
			luminosity: "dark"
		});
	} else if (/^([^\d\s]+)(?:| (\d+))$/gimsu.exec(propVal)) {
		const colorData = /^([^\d\s]+)(?:| (\d+))$/gimsu.exec(propVal);
		if (colorData[1]) {
			const color = getTranslations(colorData[1], true);
			if (color == "white") {
				return "#FFFFFF";
			} else if (color == "black") {
				return "#000000";
			} else if (colorData[2]) {
				return palette[color][String(colorData[2])];
			} else {
				return palette[color]["500"];
			}
		} else {
			return null;
		}
	}
}