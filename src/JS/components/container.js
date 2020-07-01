import React from "react";
import basicComponent from "core/basicComponent";
import { router } from "core/setup";
import Radium from "radium";
import * as Material from "@material-ui/core";
import * as Grid from "react-grid-system";
class container extends basicComponent {
  constructor(props) {
    super(props);
    if (!this.isRestored) {
      this.internalData = {
        ...this.internalData,
        isGrid: false
      };
    }
    this.myRef = React.createRef();
  }
  render() {
    const state = this.getState();
    const styles = this.getStyles();
    let elevation;
    if (state.elevation) {
      elevation = parseInt(state.elevation);
    } else {
      elevation = this.isAttributedByBeing("withoutShadow") ? 0 : 2;
    }
    let container;
    if (this.isAttributedByBeing("grid")) {
      this.updateProps.bind({
        isGrid: true
      });
      container = () => (
        <Material.Paper
          ref={this.myRef}
          elevation={elevation}
          style={styles}
          {...this.getEvents()}
        >
          <Grid.Container fluid>
            <Grid.Row justify="center">{state.children}</Grid.Row>
          </Grid.Container>
        </Material.Paper>
      );
    } else {
      container = () => (
        <Material.Paper
          ref={this.myRef}
          elevation={elevation}
          style={styles}
          {...this.getEvents()}
        >
          {state.children}
        </Material.Paper>
      );
    }
    return container();
  }
}

export default Radium(container);
