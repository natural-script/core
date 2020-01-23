import React from "react";
import basicComponent from "core/basicComponent";
import { components } from "core/NSStore";
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
      this.updateProps({
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
    if (this.isAttributedByBeing("routed")) {
      const router = components.getState()[state.router];
      const routes = router.state.routes;
      const route = {
        name: state.name,
        path: `/${
          state.name === "NSHOMEPAGE" || !state.path
            ? ""
            : state.path.split(" ==> ").join("/")
        }`,
        exact: true,
        children: state.children,
        containerProps: { elevation: 0, ...this.getEvents() }
      };
      const index = routes.findIndex(e => e.name === route.name);
      if (index === -1) {
        routes.push(route);
      } else {
        routes[index] = route;
      }
      router.updateProps({ routes: routes });
      return null;
    } else {
      return container();
    }
  }
}

export default Radium(container);
