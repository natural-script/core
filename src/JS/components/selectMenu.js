import React from "react";
import basicComponent from "core/basicComponent";
import updateDynamicData from "core/updateDynamicData";
import parseStringValue from "parsers/stringValue.js";
import Radium from "radium";
import * as Material from "@material-ui/core";
class selectMenu extends basicComponent {
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
  getVal = () => this.internalData.value;
  componentDidMount() {
    this.attatchHandler(
      "E11",
      event => {
        this.internalData.value = event.target.value;
        console.log(this.internalData.value);
        updateDynamicData(
          `components["${this.state.name}"].internalData.value`
        );
      },
      true
    );
  }

  thisComponent = () => {
    const state = this.getState();
    const styles = this.getStyles();
    return (
      <Material.FormControl
        variant="outlined"
        style={styles}
        disabled={this.isAttributedByBeing("disabled")}
      >
        <Material.InputLabel htmlFor={state.name}>
          {state.title}
        </Material.InputLabel>
        <Material.Select
          value={this.internalData.value}
          input={<Material.OutlinedInput name={state.name} id={state.name} />}
          {...this.getEvents()}
        >
          <Material.MenuItem value="">
            <em>None</em>
          </Material.MenuItem>
          {state.items.split(" &&& ").map(item => {
            item = parseStringValue(item);
            return (
              <Material.MenuItem key={item} value={item}>
                {item}
              </Material.MenuItem>
            );
          })}
        </Material.Select>
        {state.description && (
          <Material.FormHelperText>{state.description}</Material.FormHelperText>
        )}
      </Material.FormControl>
    );
  };
}

export default Radium(selectMenu);
