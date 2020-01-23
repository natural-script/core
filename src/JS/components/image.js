import React from "react";
import basicComponent from "core/basicComponent";
import Radium from "radium";
import Async from "react-async";
import * as nsfwjs from "nsfwjs";
import * as Material from "@material-ui/core";
class image extends basicComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  async detectNudity(src) {
    const model = await nsfwjs.load();
    let blob = await fetch(`https://jste-cors-proxy.herokuapp.com/${src}`).then(
      r => r.blob()
    );
    let dataURL = await new Promise(resolve => {
      let reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
    const img = document.createElement("img");
    img.height = 500;
    img.width = 500;
    img.src = dataURL;
    const predictions = await model.classify(img);
    let isNude = false;
    if (/^(Sexy|Porn|Hentai)$/.test(predictions[0].className)) {
      isNude = true;
    }
    return { isNude, dataURL };
  }
  detectNudityA = ({ src }) => this.detectNudity(src);
  thisComponent = () => {
    const state = this.getState();
    const styles = this.getStyles();
    if (this.isAttributedByBeing("transparent")) {
      return (
        <img
          src={state.source}
          alt={state.description ? state.description : null}
          style={styles}
          {...this.getEvents()}
        />
      );
    } else {
      return (
        <Material.Card
          style={{
            maxWidth: 345,
            ...styles
          }}
          {...this.getEvents()}
        >
          <Material.CardActionArea>
            <Async promiseFn={this.detectNudityA} src={state.source}>
              <Async.Loading>
                <Material.CardContent>
                  <Material.LinearProgress />
                </Material.CardContent>
              </Async.Loading>
              <Async.Resolved>
                {({ isNude, dataURL }) => {
                  if (isNude) {
                    return (
                      <Material.CardContent>
                        <Material.Typography
                          component="p"
                          align="center"
                          dangerouslySetInnerHTML={{
                            __html: "Nudes Detetcted"
                          }}
                        />
                      </Material.CardContent>
                    );
                  } else {
                    return (
                      <Material.CardMedia
                        component="img"
                        alt={state.description ? state.description : null}
                        height="140"
                        image={dataURL}
                        title={state.description ? state.description : null}
                      />
                    );
                  }
                }}
              </Async.Resolved>
            </Async>
            {state.description && (
              <Material.CardContent>
                <Material.Typography
                  component="p"
                  align="center"
                  dangerouslySetInnerHTML={{ __html: state.description }}
                />
              </Material.CardContent>
            )}
          </Material.CardActionArea>
        </Material.Card>
      );
    }
  };
}

export default Radium(image);
