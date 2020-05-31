import React from "react";
import { Link } from "react-router-dom";
import GoogleOAuth from "./GoogleOAuth";

const Header = () => {
  return (
    <nav className="ui pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>

      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleOAuth />
      </div>
    </nav>
  );
};

export default Header;
