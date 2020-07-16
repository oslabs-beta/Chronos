import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <ul>
          <li>Chronos Brand</li>
          <li>Download</li>
          <li>
            <Link to="/team">Meet the Team</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <a href="https://github.com/open-source-labs/Chronos" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/chronosmd">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/chronos-tracker">NPM</a>
          </li>
          <li>
            <a href="https://www.facebook.com/ChronosLA/">FaceBook</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
