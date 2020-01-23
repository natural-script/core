import React from "react";
import basicComponent from "core/basicComponent";
import updateDynamicData from "core/updateDynamicData";
import Radium from "radium";
import * as Material from "@material-ui/core";
class slider extends basicComponent {
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
      <Material.Slider
        ref={this.myRef}
        disabled={this.isAttributedByBeing("disabled")}
        valueLabelDisplay={this.isAttributedByBeing("withPin") ? "auto" : "off"}
        value={state.name}
        max={state.max}
        min={state.min}
        step={state.step}
        style={styles}
        {...this.getEvents()}
      />
    );
  };
}

export default Radium(slider);
