import React from "react";
import basicComponent from "core/basicComponent";
import Radium from "radium";
import * as Material from "@material-ui/core";
class icon extends basicComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  thisComponent = () => {
    const state = this.getState();
    const styles = this.getStyles();
    return (
      <Material.Icon ref={this.myRef} style={styles} {...this.getEvents()}>
        {state.code}
      </Material.Icon>
    );
  };
}

export default Radium(icon);
