import React from "react";
import basicComponent from "core/basicComponent";
import Radium from "radium";
import * as Material from "@material-ui/core";
class FAB extends basicComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  thisComponent = () => {
    const state = this.getState();
    const styles = this.getStyles();
    return (
      <Material.Fab
        ref={this.myRef}
        disabled={this.isAttributedByBeing("disabled")}
        variant={state.text ? "extended" : "round"}
        style={styles}
        {...this.getEvents()}
      >
        {state.icon && <Material.Icon>{`${state.icon}_icon`}</Material.Icon>}
        {state.text && state.text}
      </Material.Fab>
    );
  };
}

export default Radium(FAB);
