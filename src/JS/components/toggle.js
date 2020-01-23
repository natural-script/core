import React from "react";
import basicComponent from "core/basicComponent";
import updateDynamicData from "core/updateDynamicData";
import Radium from "radium";
import * as Material from "@material-ui/core";
class toggle extends basicComponent {
  constructor(props) {
    super(props);
    if (!this.isRestored) {
      this.internalData = {
        ...this.internalData,
        value: null
      };
    }
    this.myRef = React.createRef();
  }
  thisComponent = () => {
    const state = this.getState();
    const styles = this.getStyles();
    return (
      <Material.FormControlLabel
        control={
          <Material.Switch
            ref={this.myRef}
            disabled={this.isAttributedByBeing("disabled")}
            value={state.name}
            style={styles}
            {...this.getEvents()}
          />
        }
        label={state.description}
      />
    );
  };
}

export default Radium(toggle);
