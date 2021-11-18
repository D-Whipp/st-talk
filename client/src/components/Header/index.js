import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <div className="header-div">
        <Link to="/">
          <h1 className="title-header">Star Talk</h1>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              {/* <Link to="/profile">Me</Link> */}
              <a className="log-btn" href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link className="log-btn" to="/login">Login</Link>
              <Link className="log-btn" to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
