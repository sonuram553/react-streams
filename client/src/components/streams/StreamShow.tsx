import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { thunkFetchStream } from "../../actions/streamActions";
import { RootState } from "../../reducers";
import { RouteComponentProps } from "react-router-dom";

class StreamShow extends React.Component<Props> {
  streamId = (this.props.match.params as any).id;

  componentDidMount() {
    this.props.thunkFetchStream(this.streamId);
  }

  render() {
    if (!this.props.stream) return "Loading...";

    const { title, description } = this.props.stream;
    return (
      <div>
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
