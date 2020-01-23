import applyOp from "core/applyOp";
import theComponentCalled from "core/theComponentCalled";
import parseStringValue from "parsers/stringValue";
export default function({
  elementName,
  target,
  value,
  scopes,
  parentFnParams
}) {
  let targetElement;
  target = parseStringValue(target, false, scopes, parentFnParams);
  value = parseStringValue(value, false, scopes, parentFnParams);
  if (target == "itself") {
    targetElement = elementName;
  } else {
    targetElement = target;
  }
  applyOp(targetElement, () =>
    theComponentCalled(targetElement).updateProps({ width: value })
  );
}
