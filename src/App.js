import React, { useState, useEffect } from "react";
import Homepage from "./Homepage";
import "./App.css";
import { firstHomepage, secondHomepage, thirdHomepage } from "./homepages";
import Login from "./login";
import fire from "./fire.js";
import Toppage from "./toppage.js";
import Search from "./search.js";
import Product from "./product.js";
import Hero from "./hero.js";
import Profile from "./profile.js";

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
    <div>
      <div>
        <Homepage
          title={firstHomepage.title}
          subtitle={firstHomepage.subtitle}
          img={firstHomepage.img}
          description={firstHomepage.description}
        />

        <Homepage
          title={secondHomepage.title}
          subtitle={secondHomepage.subtitle}
          img={secondHomepage.img}
          description={secondHomepage.description}
        />

        <Homepage
          title={thirdHomepage.title}
          subtitle={thirdHomepage.subtitle}
          img={thirdHomepage.img}
          description={thirdHomepage.description}
        />
      </div>

      <div>
        <ProductPage />
      </div>

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

      <div>
        <Profile />
      </div>
    </div>
  );
};

export default App;
