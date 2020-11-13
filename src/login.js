import React from "react";
import "./App.css";
import signInWithGoogle from "./provider";
import googlelogo from "./googlesignin.png";

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
    <section className="login">
      <h1>Welcome!</h1>
      <h3>Please login or sign up to continue</h3>
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>

        <label>Password</label>
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
                  Sign up for new account!
                </span>
              </p>
              <button onClick={signInWithGoogle} className="google">
                <img src={googlelogo} width="191" height="46"></img>
              </button>
              <button onClick={handleLogin} className="login">
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
              <button onClick={signInWithGoogle} className="google">
                <img src={googlelogo} width="191" height="46"></img>
              </button>
              <button onClick={handleSignup} className="login">
                Sign up
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
