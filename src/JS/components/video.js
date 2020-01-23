import React from "react";
import basicComponent from "core/basicComponent";
import Radium from "radium";
import CircularProgress from "@material-ui/core/CircularProgress";
import Async from "react-async";
import VideoPlayer from "react-video-js-player";

class video extends basicComponent {
  constructor(props) {
    super(props);
    if (!this.isRestored) {
      this.internalData = {
        ...this.internalData,
        source: null,
        url: null,
        thumbnail: null,
        title: null,
        timePos: 0
      };
    }
    this.myRef = React.createRef();
  }
  onPlayerReady = player => {
    this.player = player;
  };

  play = () => this.player.play();

  pause = () => this.player.pause();

  seek = timePos => this.player.currentTime(timePos);

  onVideoPlay = duration => {
    this.player.currentTime(this.internalData.timePos);
  };

  onVideoTimeUpdate = duration => {
    this.internalData = {
      ...this.internalData,
      timePos: duration
    };
  };
  async getVideoURL(src) {
    let data;
    const prevURL = this.internalData.source;
    const nextURL = this.state.source;
    if (prevURL === nextURL) {
      data = this.internalData;
    } else {
      data = (await fetch(
        `https://jste-video-dl.herokuapp.com/api/info?url=${src}`
      ).then(res => res.json())).info;
      this.internalData = {
        ...this.internalData,
        source: this.state.source,
        url: data.url,
        thumbnail: data.thumbnail,
        title: data.title,
        ext: data.ext,
        timePos: 0
      };
    }
    return data;
  }
  getVid = ({ src }) => this.getVideoURL(src);
  thisComponent = () => {
    const state = this.getState();
    const styles = this.getStyles();
    return (
      <Async promiseFn={this.getVid} src={state.source} watch={state}>
        <Async.Loading>
          <CircularProgress />
        </Async.Loading>
        <Async.Resolved>
          {data => (
            <div style={styles}>
              <VideoPlayer
                ref={this.myRef}
                controls={true}
                src={{ type: `video/${data.ext}`, src: data.url }}
                poster={data.thumbnail}
                width={state.width}
                height={state.length}
                onReady={this.onPlayerReady}
                onPlay={this.onVideoPlay}
                onTimeUpdate={this.onVideoTimeUpdate}
                {...this.getEvents()}
              />
            </div>
          )}
        </Async.Resolved>
      </Async>
    );
  };
}

export default Radium(video);
