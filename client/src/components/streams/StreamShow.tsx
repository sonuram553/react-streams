import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { thunkFetchStream } from "../../actions/streamActions";
import { RootState } from "../../reducers";
import { RouteComponentProps } from "react-router-dom";
import flv from "flv.js";

class StreamShow extends React.Component<Props> {
  streamId = (this.props.match.params as any).id;
  videoRef = React.createRef() as React.RefObject<HTMLVideoElement>;
  flvPlayer: flv.Player | null = null;

  componentDidMount() {
    this.props.thunkFetchStream(this.streamId);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.flvPlayer?.destroy();
  }

  buildPlayer() {
    if (this.flvPlayer || !this.props.stream) return;

    this.flvPlayer = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.streamId}.flv`,
    });

    this.flvPlayer.attachMediaElement(
      this.videoRef.current as HTMLVideoElement
    );
    this.flvPlayer.load();
  }

  render() {
    if (!this.props.stream) return "Loading...";

    const { title, description } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
}

const mapState = (state: RootState, ownProps: RouteComponentProps) => {
  return { stream: state.streams[(ownProps.match.params as any).id] };
};

const connector = connect(mapState, { thunkFetchStream });
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RouteComponentProps;

export default connector(StreamShow);
