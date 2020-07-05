import React from "react";
import { thunkFetchStream } from "../../actions/streamActions";
import { RouteComponentProps } from "react-router-dom";
import { RootState } from "../../reducers";
import { connect, ConnectedProps } from "react-redux";

class StreamEdit extends React.Component<Props> {
  componentDidMount() {
    const streamId = (this.props.match.params as any).id;
    this.props.thunkFetchStream(streamId);
  }

  render() {
    return <div>StreamEdit</div>;
  }
}

const mapDispatch = { thunkFetchStream };

const mapState = (state: RootState, ownProps: RouteComponentProps) => {
  return { stream: state.streams[(ownProps.match.params as any).id] };
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RouteComponentProps;

export default connector(StreamEdit);
