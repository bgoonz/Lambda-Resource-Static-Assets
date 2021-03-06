// Complete the component in this file.
import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../actions";
import { reduxForm, Field } from "redux-form";

class SignUp extends Component {
  handleFormSubmit = ({ username, password, confirmPassword }) => {
    this.props.register(
      username,
      password,
      confirmPassword,
      this.props.history
    );
  };

  renderAlert = () => {
    if (!this.props.error) return null;
    return <h3>{this.props.error}</h3>;
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset>
          <label>Username:</label>
          <Field name="username" component="input" type="text" />
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <Field name="password" component="input" type="password" />
        </fieldset>
        <fieldset>
          <label>Confirm Password:</label>
          <Field name="confirmPassword" component="input" type="password" />
        </fieldset>
        <button action="submit">Sign Up</button>
        {this.renderAlert()}
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    authenticated: state.auth.authenticated,
  };
};

SignUp = connect(mapStateToProps, { register })(SignUp);

export default reduxForm({
  form: "signup",
  fields: ["username", "password", "confirmPassword"],
})(SignUp);
