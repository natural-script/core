import React from "react";
import basicComponent from "core/basicComponent";
import updateDynamicData from "core/updateDynamicData";
import Radium from "radium";
import * as Material from "@material-ui/core";
class textField extends basicComponent {
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
        this.internalData.value = event.target.value;
        updateDynamicData(
          `components["${this.state.name}"].internalData.value`
        );
      },
      true
    );
  }
  getVal = () => this.internalData.value;
  thisComponent = () => {
    const state = this.getState();
    const styles = this.getStyles();
    return (
      <Material.TextField
        ref={this.myRef}
        id={
          this.isAttributedByBeing("disabled")
            ? "outlined-disabled"
            : "outlined-name"
        }
        defaultValue={this.internalData.value}
        label={state.title}
        helperText={state.description}
        multiline={this.isAttributedByBeing("multilined")}
        margin="normal"
        inputProps={{
          minLength: state.min,
          maxLength: state.max
        }}
        variant="outlined"
        style={styles}
        {...this.getEvents()}
      />
    );
  };
}

export default Radium(textField);
