import { components } from "core/NSStore";
import watch from "redux-watch";
export default function applyOp(componentName, Op) {
  const componentRef = components.getState()[componentName];
  if (componentRef) {
    Op();
  } else {
    const w = watch(components.getState, `${componentName}`);
    let unsubscribe;
    unsubscribe = components.subscribe(
      w((newVal, oldVal, objectPath) => {
        if (!oldVal && newVal) {
          unsubscribe();
          Op();
        } else {
          unsubscribe();
        }
      })
    );
  }
}
