import applyOp from "core/applyOp";
import theComponentCalled from "core/theComponentCalled";
import parseStringValue from "parsers/stringValue";
export default function({
  elementName,
  target,
  timePosition,
  scopes,
  parentFnParams
}) {
  let targetElement;
  target = parseStringValue(target, false, scopes, parentFnParams);
  if (target == "itself") {
    targetElement = elementName;
  } else {
    targetElement = target;
  }
  timePosition = parseStringValue(timePosition, false, scopes, parentFnParams);
  applyOp(targetElement, () =>
    theComponentCalled(targetElement).updateProps({ width: value })
  );
}
