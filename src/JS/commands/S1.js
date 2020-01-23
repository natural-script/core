import parseStringValue from "parsers/stringValue";
import theComponentCalled from "core/theComponentCalled";
export default function({ elementName, target, scopes, parentFnParams }) {
  let targetElement;
  target = parseStringValue(target, false, scopes, parentFnParams);
  if (target == "itself") {
    targetElement = elementName;
  } else {
    targetElement = target;
  }
  theComponentCalled(
    theComponentCalled(target).props.prestate.container
  ).removeChild(target);
}
