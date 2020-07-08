import React from "react";
import StreamForm from "./StreamForm";
import { connect, ConnectedProps } from "react-redux";
import { thunkCreateStream } from "../../actions/streamActions";

class StreamCreate extends React.Component<PropsFromRedux> {
  onSubmit = (formValues: any) => {
    this.props.thunkCreateStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a new Stream</h3>
        <StreamForm onSubmit={this.onSubmit}></StreamForm>
      </div>
    );
  }
}

const connector = connect(null, { thunkCreateStream });
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(StreamCreate);
