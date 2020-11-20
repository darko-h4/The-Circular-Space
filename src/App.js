import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./login";
import fire from "./fire.js";
import Toppage from "./toppage.js";
import Search from "./search.js";
import Hero from "./hero.js";
import Profile from "./profile.js";
import ProductPage from "./productPage";
import AddItemPage from"./AddItemPage";
import AddMoreDetailsPage from"./AddMoreDetailsPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav'; 
import {Benefits, Borrow, Lend} from "./Onboarding";


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
    setPasswordError("Please enter at least 6 characters");
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
        <Route path="/" exact component={Benefits} />
        <Route path="/borrow" component={Borrow} />
        <Route path="/lend" component={Lend}/>
        <Route path="/toppage" component={Toppage} />
        <Route path="/login" component={Login} />
        <Route path="/productpage" component={ProductPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/additem" component={AddItemPage} />
        <Route path="/adddetails" component={AddMoreDetailsPage} />
        

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
