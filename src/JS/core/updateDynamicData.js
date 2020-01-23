import { components } from "core/NSStore";
export default function(path) {
  const componentsStore = components.getState();
  for (const component in componentsStore) {
    if (componentsStore[component]) {
      if (componentsStore[component].internalData.dynamicDataPaths.includes(path)) {
        componentsStore[component].forceUpdate();
      }
    }
  }
  return;
}
