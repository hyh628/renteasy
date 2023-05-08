import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <nav className="navbar" class="navbar is-fixed-top" style={{ paddingTop: "5px" }}>
      <div
        className="container"
        style={{ paddingLeft: "32px", paddingRight: "32px" }}
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <figure className="image">
              <img
                className="is-rounded"
                src="https://bulma.io/images/placeholders/64x64.png"
                alt="Logo"
              />
            </figure>
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        {props.isSignedIn && (
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <Link to="/userHome" className="navbar-item">
                <i className="material-icons">person_outline</i>
                <div>{props.user_name}</div>
              </Link>
              <a className="button mt" href="/logout">
                Logout
              </a>
            </div>
          </div>
        )}
        
      </div>
    </nav>
  );
};

export default NavBar;
