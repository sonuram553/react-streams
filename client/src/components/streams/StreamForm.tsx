import React from "react";
import {
  Field,
  WrappedFieldProps,
  WrappedFieldMetaProps,
  reduxForm,
  InjectedFormProps,
} from "redux-form";

interface CustomFieldProps {
  label: string;
  id: string;
}

interface Props {
  onSubmit(formValues: any): any;
}

class StreamForm extends React.Component<Props & InjectedFormProps> {
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
    //this.props.thunkCreateStream(formValues);
    this.props.onSubmit(formValues);
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

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm as any);

/* const mapToDispatch = {
  thunkCreateStream,
};

const connector = connect(null, mapToDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export default connector(formWrapped); */
