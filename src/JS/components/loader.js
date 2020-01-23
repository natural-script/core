import React from "react";
import basicComponent from "core/basicComponent";
import Radium from "radium";
import * as Material from "@material-ui/core";
class loader extends basicComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  thisComponent = () => {
    const state = this.getState();
    const styles = this.getStyles();
    if (this.isAttributedByBeing("circular")) {
      return (
        <Material.CircularProgress
          ref={this.myRef}
          style={styles}
          {...this.getEvents()}
        >
          {state.text}
        </Material.CircularProgress>
      );
    } else if (this.isAttributedByBeing("linear")) {
      return (
        <Material.LinearProgress
          ref={this.myRef}
          style={styles}
          {...this.getEvents()}
        >
          {state.text}
        </Material.LinearProgress>
      );
    }
  };
}

export default Radium(loader);
