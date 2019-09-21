import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Icon from '../../assets/icons/icon.jpg';
import styles from './Footer.module.css';


const Nav = () => {
  return (
      <Fragment>
    <hr/>   
    <footer className="container py-5">
        
        <div className="row">
            <div className="col-12 col-md">
                <img src={Icon} className={styles.IconFooter} alt="Icon" />
                <small className="d-block mb-3 text-muted">© 2019</small>
                </div>
                <div className="col-6 col-md">
                <h5>Features</h5>
                <ul className="list-unstyled text-small">
                    <li><Link className="text-muted" to="/">Home</Link> </li>
                    <li><Link className="text-muted" to="/About">About</Link> </li>
                    <li><Link className="text-muted" to="#">Team feature</Link> </li>
                    <li><Link className="text-muted" to="#">Stuff for developers</Link> </li>
                    <li><Link className="text-muted" to="#">Another one</Link> </li>
                    <li><Link className="text-muted" to="#">Last time</Link> </li>
                </ul>
                </div>
                <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                    <li><Link className="text-muted" to="/Careers">Careers</Link> </li>
                    <li><Link className="text-muted" to="/Howitwork">How It Works</Link> </li>
                    <li><Link className="text-muted" to="#">Another resource</Link> </li>
                    <li><Link className="text-muted" to="#">Final resource</Link> </li>
                </ul>
                </div>
                <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                    <li><Link className="text-muted" to="/Contact">Contact</Link> </li>
                    <li><Link className="text-muted" to="#">Education</Link> </li>
                    <li><Link className="text-muted" to="#">Government</Link> </li>
                    <li><Link className="text-muted" to="#">Gaming</Link> </li>
                </ul>
                </div>
                <div className="col-6 col-md">
                <h5>About</h5>
                <ul className="list-unstyled text-small">
                    <li><Link className="text-muted" to="/Donations">Donations</Link> </li>
                    <li><Link className="text-muted" to="#">Locations</Link> </li>
                    <li><Link className="text-muted" to="#">Privacy</Link> </li>
                    <li><Link className="text-muted" to="#">Terms</Link> </li>
                </ul>
                </div>
            </div>
        </footer>
    </Fragment>
  );
}

export default Nav;