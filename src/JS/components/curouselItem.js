import React from "react";
import basicComponent from "core/basicComponent";
import Radium from "radium";
class curouselItem extends basicComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  thisComponent = () => {
    const state = this.getState();
    const styles = this.getStyles();
    return (
      <div {...this.getEvents()}>
        <img src={state.source} alt={state.title} className="slick-image" />
        <div className="slick-caption">
          <h4 dangerouslySetInnerHTML={{ __html: state.description }} />
        </div>
      </div>
    );
  };
}

export default Radium(curouselItem);
