import "./App.css";
import React, {useState} from "react";
import Login from "./loginFunctions";
import Toppage from "./toppage.js";
import Profile from "./profile.js";
import ItemPage from "./ItemPage";
import AddItemPage from"./AddItemPage";
import AddMoreDetailsPage from"./AddMoreDetailsPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Benefits, Borrow, Lend} from "./Onboarding";
import ItemAdded from "./ItemAdded";
import ItemCheckout from "./ItemCheckout";
import ItemBorrowed from "./ItemBorrowed";
import CategorySelection from "./categorySelection";
import ItemProfile from './ItemProfile';


const App = () => {

  return (
      <Router> 
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
        <Route path="/itemadded" component={ItemAdded} />
        <Route path="/itemcheckout" component={ItemCheckout} />
        <Route path="/itemborrowed" component={ItemBorrowed} />
        <Route path='/category' component={CategorySelection} />
        <Route path='/itemprofile' component={ItemProfile}/>
      </Switch>
    </Router>
  );
};

export default App;
