import React from "react";
import basicComponent from "core/basicComponent";
import Radium from "radium";
import * as Material from "@material-ui/core";
class appBar extends basicComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  thisComponent = () => {
    const state = this.getState();
    const styles = this.getStyles();
    return (
      <Material.AppBar
        position="static"
        ref={this.myRef}
        style={styles}
        {...this.getEvents()}
      >
        <Material.Toolbar>
          <Material.Typography variant="h6">
            {state.title || state.text}
          </Material.Typography>
        </Material.Toolbar>
      </Material.AppBar>
    );
  };
}

export default Radium(appBar);
