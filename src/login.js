import React from "react";
import "./App.css";
import signInWithFacebook from "./components/facebookprovider";
import signInWithGoogle from "./components/googleprovider";
import googlelogo from "./images/googlesignin.png";
import fblogo from "./images/fblogin.png";
import Navlogin from './Navlogin';

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="main">
    <div className="mainContainer">
      <Navlogin/>
      
      <div className='toppage'>
      <h1>Sign-up or Login!</h1>
      </div>
      <div className="loginContainer">
        <p>Email</p>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>

        <p>Password (min 6 characters)</p>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>

        <div className="btnContainer">
          {hasAccount ? (
            <>
            <p>
                <span onClick={() => setHasAccount(!hasAccount)}>
                  Sign up for a new account!
                </span>
            </p>
              <button onClick={signInWithGoogle} className="auth">
                <img src={googlelogo} alt= "logo" width="191" height="46"></img>
              </button>
              <button onClick={signInWithFacebook} className="auth">
                <img src={fblogo} alt="facebook" width="231" height="41,5"></img>
              </button>
              <button onClick={handleLogin} alt="login" className="login">
                Log In
              </button>
              
            </>
          ) : (
            <>
            <p>
                <span onClick={() => setHasAccount(!hasAccount)}>
                  I already have an account!
                </span>
            </p>
              <button onClick={signInWithGoogle} className="auth">
                <img src={googlelogo} width="191" alt="googlelogo" height="46"></img>
              </button>
              <button onClick={signInWithFacebook} className="auth">
                <img src={fblogo} width="231" alt="signin" height="41,5"></img>
              </button>
              <button onClick={handleSignup} alt="singup" className="login">
                Sign up
              </button>
              
            </>
          )}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Login;