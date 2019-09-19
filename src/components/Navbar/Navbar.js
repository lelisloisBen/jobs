import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar() {
  return (
    <div className="Navbar">
        <h1>Navigation</h1>
        <Link to="/">
            <button>Home</button>
        </Link>

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

export default Navbar;
