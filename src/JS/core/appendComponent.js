import React from "react";
import applyOp from "core/applyOp";
import { components } from "core/NSStore";
import parseStringValue from "parsers/stringValue";
export default function appendComponent(component, props) {
  let elemContainer = parseStringValue(
    props.container || props.router || "NSHOMEPAGE",
    false,
    props.scopes,
    props.parentFnParams
  );
  if (props.router) {
    elemContainer = "NSMAINCONTAINER"
  }
  applyOp(elemContainer, () => {
    const name = parseStringValue(
      props.name,
      false,
      props.scopes,
      props.parentFnParams
    );
    const elem = React.createElement(
      component,
      {
        key: name,
        name: name,
        prestate: {
          ...props,
          ...{
            name: name,
            container: elemContainer
          }
        },
        ref: ourComponent => {
          components.dispatch({
            type: "ADD_COMPONENT",
            componentName: name,
            component: ourComponent
          });
        }
      },
      null
    );
    return components.getState()[elemContainer].addChild(elem);
  });
}
