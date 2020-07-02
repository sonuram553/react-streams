import React from "react";
import {
  Field,
  reduxForm,
  InjectedFormProps,
  WrappedFieldProps,
  WrappedFieldMetaProps,
} from "redux-form";

import { connect, ConnectedProps } from "react-redux";
import { thunkCreateStream } from "../../actions/streamActions";

interface CustomFieldProps {
  label: string;
  id: string;
}

class StreamCreate extends React.Component<InjectedFormProps & PropsFromRedux> {
  renderInputError({ error, touched }: WrappedFieldMetaProps) {
    if (touched && error)
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
  }

  renderInput = ({
    input,
    meta,
    label,
    id,
  }: WrappedFieldProps & CustomFieldProps) => {
    const className = `field ${meta.touched && meta.error ? "error" : ""}`;
    return (
      <div className={className}>
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" {...input} autoComplete="off" />
        {this.renderInputError(meta)}
      </div>
    );
  };

  onSubmit = (formValues: any) => {
    this.props.thunkCreateStream(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          label="Enter title"
          id="title"
          component={this.renderInput}
        />
        <Field
          name="description"
          label="Enter description"
          id="description"
          component={this.renderInput}
        />

        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues: any) => {
  const errors: any = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter description";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate as any);

const mapToDispatch = {
  thunkCreateStream,
};

const connector = connect(null, mapToDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export default connector(formWrapped);
