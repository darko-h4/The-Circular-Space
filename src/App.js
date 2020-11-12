import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./login";
import fire from "./fire.js";
import Toppage from "./toppage.js";
import Search from "./search.js";
import Product from "./product.js";
import Hero from "./hero.js";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav'; 
import {Onboarding1} from "./pages/Onboarding1";
import {Onboarding2} from "./pages/Onboarding2";
import {Onboarding3} from "./pages/Onboarding3";




const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInput = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
      <Router>
        <Nav/>
        <Switch>
        <Route path="/" exact component={Onboarding1} />
        <Route path="/onboarding2" component={Onboarding2} />
        <Route path="/onboarding3" component={Onboarding3}/>
        <Route path="/toppage" component={Toppage} />
        <Route path="/search" component={Search} />
        <Route path="/product" component={Product} />
        <Route path="/login" component={Login} />

      <div className="Login">
        {user ? (
          <Hero handleLogout={handleLogout} />
        ) : (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        )}
      </div>
      </Switch>
      </Router>
  );
};

export default App;
