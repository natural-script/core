import React from "react";
import basicComponent from "core/basicComponent";
import Radium from "radium";
import * as Material from "@material-ui/core";
class button extends basicComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  setVal = newVal => {
    this.updateProps({ text: newVal });
  };
  getVal = () => this.getState().text;
  thisComponent = () => {
    const state = this.getState();
    const styles = this.getStyles();
    return (
      <Material.Button
        ref={this.myRef}
        disabled={this.isAttributedByBeing("disabled")}
        variant={this.isAttributedByBeing("raised") ? "contained" : "text"}
        style={styles}
        {...this.getEvents()}
      >
        {state.text}
      </Material.Button>
    );
  };
}

export default Radium(button);
