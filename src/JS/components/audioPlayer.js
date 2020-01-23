import React from "react";
import basicComponent from "core/basicComponent";
import Radium from "radium";
import ReactAplayer from "react-aplayer";
import mergeAdvanced from "object-merge-advanced";
class audioPlayer extends basicComponent {
  constructor(props) {
    super(props);
    if (!this.isRestored) {
      this.state = { ...this.state, audios: [] };
    }
    this.myRef = React.createRef();
  }

  onInit = ap => {
    this.ap = ap;
  };

  play = () => this.ap.play();

  pause = () => this.ap.pause();

  seek = timePos => this.ap.seek(timePos);

  addAudio(audioProps) {
    this.setState(prevState => {
      const prevAudios = prevState.audios;
      const nextAudios = prevAudios.concat([audioProps]);
      const nextState = mergeAdvanced(prevState, { audios: nextAudios });
      return nextState;
    });
  }
  thisComponent = () => {
    const state = this.getState();
    const styles = this.getStyles();
    return (
      <ReactAplayer
        ref={this.myRef}
        theme="#F57F17"
        lrcType={3}
        audio={state.audios || []}
        onInit={this.onInit}
        style={styles}
        {...this.getEvents()}
      />
    );
  };
}

export default Radium(audioPlayer);
