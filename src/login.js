import React from "react";
import "./App.css";
import signInWithGoogle from "./components/googleprovider";
import googlelogo from "./images/googlesignin.png";
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

      <div className='btnContainer'>
      <br/>
      <button onClick={signInWithGoogle} className="auth">
                <img src={googlelogo} width="191" height="46" alt='googlelogin'></img>
              </button>
    
      <h4>If you can't login with google, you can login with email below!</h4>
      </div>

      <div className="loginContainer">
        <label>Email</label>
        <input
          type="email"
          autoFocus
          required
          placeholder="E.g. test123@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>

        <label>Password</label>
        <input
          type="password"
          required
          placeholder="Minimum 6 characters"
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
             
              <button className='outline' onClick={handleLogin} >
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
             
              <button className='outline' onClick={handleSignup} >
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