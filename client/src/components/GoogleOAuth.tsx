import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { signIn, signOut } from "../actions/authActions";
import { RootState } from "../reducers";

declare const gapi: any;

class GoogleOAuth extends React.Component<Props> {
  gOAuth: any;

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

          this.onAuthChange(this.gOAuth.isSignedIn.get());
          this.gOAuth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn: boolean) => {
    isSignedIn
      ? this.props.signIn(this.gOAuth.currentUser.get().getId())
      : this.props.signOut();
  };

  renderAuthBtn() {
    if (this.props.isSignedIn === null) return "";
    if (this.props.isSignedIn)
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

const mapState = (state: RootState) => {
  return { isSignedIn: state.auth.isSignedIn };
};

const mapDispatch = {
  signIn,
  signOut,
};

const connector = connect(mapState, mapDispatch);
type Props = ConnectedProps<typeof connector>;
export default connector(GoogleOAuth);
