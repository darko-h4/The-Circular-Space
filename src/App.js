import "./App.css";
import React from "react";
import Login from "./loginFunctions";
import Toppage from "./toppage.js";
import Profile from "./profile.js";
import ItemPage from "./ItemPage";
import AddItemPage from"./AddItemPage";
import AddMoreDetailsPage from"./AddMoreDetailsPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav'; 
import {Benefits, Borrow, Lend} from "./Onboarding";


const App = () => {


  return (
      <Router>
        <Nav/>
      
        <Switch>

        <Route path="/" exact component={Benefits} />
        <Route path="/borrow" component={Borrow} />
        <Route path="/lend" component={Lend}/>
        <Route path="/toppage" component={Toppage} />
        <Route path="/login" component={Login} />
        <Route path="/itempage" component={ItemPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/additem" component={AddItemPage} />
        <Route path="/adddetails" component={AddMoreDetailsPage} />

      </Switch>
    </Router>
  );
};

export default App;
