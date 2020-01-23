import { components } from "core/NSStore";
export default function theComponentCalled(componentName) {
  return components.getState()[componentName];
}
