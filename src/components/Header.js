import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav
        id="navbar-example2"
        class="navbar d-flex justify-content-sm-end px-3 mb-3"
      >
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#profile">
              profile
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">
              skills
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#works">
              works
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
