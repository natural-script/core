const getComponent = require.context("components", true, /\.js$/);
import appendComponent from "core/appendComponent";
import applyOp from "core/applyOp";
import theComponentCalled from "core/theComponentCalled";
import setup from "core/setup";
import getTranslations from "core/getTranslations";
import initFirebase from "core/initFirebase";
export default function manageComponent(
  data,
  props = {},
  scopes,
  parentFnParams
) {
  if (data.mode) {
    props.mode = data.mode;
  }
  if (
    data.attributes &&
    data.withAttributes &&
    data.attributes != "undefined" &&
    data.withAttributes != "undefined undefined"
  ) {
    props.attributes = `${data.attributes} and ${data.withAttributes}`;
  } else if (
    data.attributes &&
    data.withoutAttributes &&
    data.attributes != "undefined" &&
    data.withoutAttributes != "undefined undefined"
  ) {
    props.attributes = `${data.attributes} and ${data.withoutAttributes}`;
  } else if (
    data.withAttributes &&
    data.withAttributes != "undefined undefined"
  ) {
    props.attributes = `with ${data.withAttributes}`;
  } else if (
    data.withoutAttributes &&
    data.withoutAttributes != "undefined undefined"
  ) {
    props.attributes = `without ${data.withoutAttributes}`;
  } else if (data.attributes && data.attributes != "undefined") {
    props.attributes = `${data.attributes}`;
  }
  if (data.id == "CI1") {
    setup(props);
  } else if (data.id == "CI2") {
    if (getTranslations(data.component, true) == "firebaseCenter") {
      initFirebase({
        scopes,
        parentFnParams,
        ...props
      });
    } else {
      appendComponent(
        getComponent(`./${getTranslations(data.component, true)}.js`).default,
        {
          scopes,
          parentFnParams,
          ...props
        }
      );
    }
  } else if (data.id == "CI3") {
    applyOp(data.name, () => theComponentCalled(data.name).updateProps(props));
  }
}
