import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-primary"
        
      >
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            Admin-1
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <div className="d-flex">
              <Link to="/">
                <button
                  className="btn btn-outline-success text-white "
                  type="submit"
                >
                  Home
                </button>
              </Link>
              <Link to="/Create">
                <button
                  className="btn btn-outline-success text-white ms-3 "
                  type="submit"
                >
                  New Create
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
