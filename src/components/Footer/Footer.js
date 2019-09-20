import React from 'react';
import { Link } from "react-router-dom";
import styles from './Footer.module.css';


const Nav = () => {
  return (
    <div className={styles.Footer}>
        <div className="container">
            <div className="row">
                <div className="col">
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    
                </div>
                <div className="col">
                    <Link to="/Careers">Careers</Link>
                </div>
                <div className="col">
                    <Link to="/Contact">Contact</Link>
                </div>
                <div className="col">
                    <Link to="/Donations">Donations</Link>
                </div>
            </div>
        </div>

    </div>
  );
}

export default Nav;