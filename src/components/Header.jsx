import React from "react";
import { Link } from "react-router-dom";

const Header = props => (
  <nav className="navbar navbar-dark bg-dark mb-4">
    <Link to="/" className="navbar-brand  h1">
      {props.title.toUpperCase()}
    </Link>
  </nav>
);

export default Header;
