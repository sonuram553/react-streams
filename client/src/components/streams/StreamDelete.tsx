import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect, ConnectedProps } from "react-redux";
import {
  thunkFetchStream,
  thunkDeleteStream,
} from "../../actions/streamActions";
import { RouteComponentProps, Link } from "react-router-dom";
import { RootState } from "../../reducers";

class StreamDelete extends React.Component<Props> {
  streamId: string = (this.props.match.params as any).id;

  componentDidMount() {
    this.props.thunkFetchStream(this.streamId);
  }

  onDismissModal = () => {
    history.push("/");
  };

  renderActions = () => (
    <React.Fragment>
      <button
        className="ui button negative"
        onClick={() => this.props.thunkDeleteStream(this.streamId)}
      >
        Delete
      </button>

      <Link to="/" className="ui button">
        Cancel
      </Link>
    </React.Fragment>
  );

  render() {
    return (
      <Modal
        title={`Delete Stream - ${this.props.stream?.title}`}
        content="Are you sure you want to delete the stream?"
        actions={this.renderActions()}
        onDismiss={this.onDismissModal}
      />
    );
  }
}

const mapState = (state: RootState, ownProps: RouteComponentProps) => {
  return {
    stream: state.streams[(ownProps.match.params as any).id],
  };
};

const connector = connect(mapState, { thunkFetchStream, thunkDeleteStream });
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RouteComponentProps;

export default connector(StreamDelete);
