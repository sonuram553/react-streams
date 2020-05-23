import React from "react";
import { Link } from "react-router-dom";

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
      </div>
    </nav>
  );
};

export default Header;
