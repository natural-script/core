import React from "react";
import basicComponent from "core/basicComponent";
import {
  router
} from "core/setup";
import Radium from "radium";
class page extends basicComponent {
  constructor(props) {
    super(props);
    if (!this.isRestored) {
      this.internalData = {
        ...this.internalData,
        isGrid: false
      };
    }
    this.myRef = React.createRef();
  }
  componentDidUpdate() {
    const state = this.getState();
    const route = {
      name: state.name,
      path: `/${
          state.name === "NSHOMEPAGE" || !state.path
            ? ""
            : state.path.split(" ==> ").join("/")
        }`,
      children: state.children,
      containerProps: {
        elevation: 0,
        ...this.getEvents()
      }
    };
    router.setRoutes(route)
  }
  render() {
    return null;
  }
}
export default Radium(page);