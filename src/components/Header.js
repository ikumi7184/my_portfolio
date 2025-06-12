import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div class="logo">
        <h3>My portfolio</h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/sns">SNS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
