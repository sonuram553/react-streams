import React from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

interface StreamCreateProps extends InjectedFormProps {}

class StreamCreate extends React.Component<StreamCreateProps> {
  render() {
    return (
      <form>
        <Field name="title" />
        <Field name="description" />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
