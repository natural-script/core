import React from "react";
import basicComponent from "core/basicComponent";
import Radium from "radium";
import * as Material from "@material-ui/core";
class text extends basicComponent {
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
      <Material.Typography
        ref={this.myRef}
        dangerouslySetInnerHTML={{
          __html: state.text
        }}
        style={styles}
        {...this.getEvents()}
      />
    );
  };
}

export default Radium(text);
