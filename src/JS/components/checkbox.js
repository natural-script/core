import React from "react";
import basicComponent from "core/basicComponent";
import updateDynamicData from "core/updateDynamicData";
import Radium from "radium";
import * as Material from "@material-ui/core";
class checkbox extends basicComponent {
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
  componentDidMount() {
    this.attatchHandler(
      "E11",
      event => {
        this.internalData.value = event.target.checked;
        updateDynamicData(
          `components["${this.state.name}"].internalData.checked`
        );
      },
      true
    );
  }

  thisComponent = () => {
    const state = this.getState();
    const styles = this.getStyles();
    return (
      <Material.FormControlLabel
        control={
          <Material.Checkbox
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

export default Radium(checkbox);
