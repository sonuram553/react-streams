import React from "react";

declare const gapi: any;

class GoogleOAuth extends React.Component {
  gOAuth: any;
  state = {
    isSignedIn: null,
  };

  componentDidMount() {
    gapi.load("auth2", () => {
      gapi.auth2
        .init({
          client_id:
            "556472372955-l2g1q5v53nfrir88ss9vah7hlm4sd5b2.apps.googleusercontent.com",
          cookiepolicy: "single_host_origin",
        })
        .then((res: any) => {
          this.gOAuth = res;
          this.gOAuth.isSignedIn.listen((isSignedIn: boolean) => {
            this.setState({ isSignedIn });
          });
          this.setState({ isSignedIn: this.gOAuth.isSignedIn.get() });
        });
    });
  }

  renderAuthBtn() {
    if (this.state.isSignedIn === null) return "";
    if (this.state.isSignedIn)
      return (
        <button
          className="ui red google button"
          onClick={() => this.gOAuth.signOut()}
        >
          <i className="google icon"></i> Sign Out
        </button>
      );
    return (
      <button
        className="ui red google button"
        onClick={() => this.gOAuth.signIn()}
      >
        <i className="google icon"></i>Sign In
      </button>
    );
  }

  render() {
    return <div>{this.renderAuthBtn()}</div>;
  }
}

export default GoogleOAuth;
