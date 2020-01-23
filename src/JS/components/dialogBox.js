import React from "react";
import basicComponent from "core/basicComponent";
import Radium from "radium";
import * as Material from "@material-ui/core";
class dialogBox extends basicComponent {
  constructor(props) {
    super(props);
    if (!this.isRestored) {
      this.state = { ...this.state, isOpened: false };
    }
    this.myRef = React.createRef();
  }
  open = () => {
    if (this.getState().isOpened != true) {
      this.updateProps({ isOpened: true });
    }
  };
  close = () => {
    if (this.getState().isOpened != false) {
      this.updateProps({ isOpened: false });
    }
  };
  thisComponent = () => {
    const state = this.getState();
    const styles = this.getStyles();
    return (
      <Material.Dialog
        ref={this.myRef}
        open={state.isOpened}
        fullScreen={this.isAttributedByBeing("fullscreen")}
        aria-labelledby={state.name}
        style={styles}
        {...this.getEvents()}
      >
        {state.title && (
          <Material.DialogTitle id={state.name}>
            {state.title}
          </Material.DialogTitle>
        )}
        <Material.DialogContent>{state.children}</Material.DialogContent>
        <Material.DialogActions>
          <Material.Button onClick={this.close} color="primary">
            Close
          </Material.Button>
        </Material.DialogActions>
      </Material.Dialog>
    );
  };
}

export default Radium(dialogBox);
