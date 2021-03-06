import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { thunkFetchStreams } from "../../actions/streamActions";
import { RootState } from "../../reducers";
import { Stream } from "../../types";
import { Link } from "react-router-dom";

class StreamList extends React.Component<Props> {
  componentDidMount() {
    this.props.thunkFetchStreams();
  }

  renderAdmin({ userId, id }: Stream) {
    if (!userId || this.props.currentUserId !== userId) return;
    return (
      <div className="right floated content">
        <Link to={`streams/edit/${id}`} className="ui button primary">
          Edit
        </Link>

        <Link to={`streams/delete/${id}`} className="ui button negative">
          Delete
        </Link>
      </div>
    );
  }

  renderList() {
    return this.props.streams.map((stream) => (
      <div className="item" key={stream.id}>
        {this.renderAdmin(stream)}
        <i className="large middle aligned icon camera"></i>
        <div className="content">
          <Link to={`streams/${stream.id}`} className="header">{stream.title}</Link>
          <div className="description">{stream.description}</div>
        </div>
      </div>
    ));
  }

  renderCreate() {
    if (!this.props.isSignedIn) return;
    return (
      <div style={{ textAlign: "right" }}>
        <Link to="streams/new" className="ui button primary">
          Create Stream
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>

        {this.renderCreate()}
      </div>
    );
  }
}

const mapState = ({ streams, auth }: RootState) => ({
  streams: Object.values(streams),
  currentUserId: auth.userId,
  isSignedIn: auth.isSignedIn,
});

const connector = connect(mapState, {
  thunkFetchStreams,
});

type Props = ConnectedProps<typeof connector>;

export default connector(StreamList);
