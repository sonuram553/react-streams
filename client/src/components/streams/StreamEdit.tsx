import React from "react";
import _ from "lodash";
import { thunkFetchStream, thunkEditStream } from "../../actions/streamActions";
import { RouteComponentProps } from "react-router-dom";
import { RootState } from "../../reducers";
import { connect, ConnectedProps } from "react-redux";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component<Props> {
  streamId: string = "";
  componentDidMount() {
    this.streamId = (this.props.match.params as any).id;
    this.props.thunkFetchStream(this.streamId);
  }

  onSubmit = (formValues: any) => {
    this.props.thunkEditStream(this.streamId, formValues);
  };

  render() {
    return (
      <div>
        <h3>Edit the Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        ></StreamForm>
      </div>
    );
  }
}

const mapDispatch = { thunkFetchStream, thunkEditStream };

const mapState = (state: RootState, ownProps: RouteComponentProps) => {
  return { stream: state.streams[(ownProps.match.params as any).id] };
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RouteComponentProps;

export default connector(StreamEdit);
