import parseLength from "parsers/length";
import parseColor from "parsers/color";
import parseShape from 'parsers/shape';
import parsePos from 'parsers/position';
import parseFontWeight from 'parsers/fontWeight';
export default function (prop, val) {
    const lengthBased = [
        "distanceFromBottom",
        "distanceFromTop",
        "distanceFromLeft",
        "distanceFromRight",
        "width",
        "length",
        "fontSize"
    ];
    const colorBased = ["fontColor", "background"];
    if (lengthBased.includes(prop)) {
        return parseLength(val);
    } else if (colorBased.includes(prop)) {
        return parseColor(val);
    } else if (prop == 'shape') {
        return parseShape(val)
    } else if (prop == 'position') {
        return parsePos(val)
    } else if (prop == 'fontWeight') {
        return parseFontWeight(val)
    } else if (prop == 'backgroundImage') {
        return `url("${val}")`
    }
    return val;
}