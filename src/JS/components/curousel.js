import React from "react";
import basicComponent from "core/basicComponent";
import Radium from "radium";
import Carousel from "react-slick";
import CurouselItem from "components/curouselItem";
import parseStringValue from "parsers/stringValue.js";
import mergeAdvanced from "object-merge-advanced";
import * as Material from "@material-ui/core";
class curousel extends basicComponent {
  constructor(props) {
    super(props);
    if (!this.isRestored) {
      const specialState = { items: [] };
      this.state = mergeAdvanced(specialState, this.state);
    }
    this.myRef = React.createRef();
  }
  addItem = itemData => {
    this.setState(prevState => {
      const prevItems = prevState.items;
      const nextItem = (
        <div key={parseStringValue(itemData.name)}>
          <CurouselItem
            prestate={itemData}
            ref={ourComponent => {
              components.dispatch({
                type: "ADD_COMPONENT",
                componentName: parseStringValue(itemData.name),
                component: ourComponent
              });
            }}
          />
        </div>
      );
      const nextItems = prevItems.concat([nextItem]);
      const nextState = mergeAdvanced(prevState, { items: nextItems });
      return nextState;
    });
  };
  thisComponent = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    const state = this.getState();
    const styles = this.getStyles();
    return (
      <Material.Grid container style={styles}>
        <Material.Grid item xs={12} sm={12} md={8}>
          <Material.Card>
            <Carousel {...settings}>{state.items}</Carousel>
          </Material.Card>
        </Material.Grid>
      </Material.Grid>
    );
  };
}

export default Radium(curousel);
