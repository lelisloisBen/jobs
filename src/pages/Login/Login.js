import React from 'react';
import styles from './Login.module.css';
import Logo from "../../assets/icons/icon.jpg";

function Login() {
  return (
    <div>
        <form className={styles.formSignin}>
            <div className="text-center mb-4">
                <img className="mb-4" src={Logo} alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Job.com</h1>
                <p>Only way to know if I know, Try me.</p>
            </div>

            <div className={styles.formLabelGroup}>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputEmail">Email address</label>
            </div>

            <div className={styles.formLabelGroup}>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <label for="inputPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted text-center">&copy; 2019</p>
        </form>
    </div>
  );
}

export default Login;