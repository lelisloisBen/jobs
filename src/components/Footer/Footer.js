import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';


function Nav() {
  return (
    <div className="Footer">
        <h1>Footer</h1>
        <Link to="/About">
            <button>About</button>
        </Link>

        <Link to="/Careers">
            <button>Careers</button>
        </Link>

        <Link to="/Contact">
            <button>Contact</button>
        </Link>

        <Link to="/Donations">
            <button>Donations</button>
        </Link>
    </div>
  );
}

export default Nav;