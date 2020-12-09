import React from "react";
import picture from "./images/profile.jpg";
import {Link} from "react-router-dom";
import Nav from './Nav';
import ItemCard from "./ItemCard";
import firebase from "firebase";

const Profile = () => {
  return (
    <section className='main'>
    <div className='mainContainer'>
      <Nav/>
      <div className='toppage'>
      <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
      </div>
      
      <div className="usercard">
      <img alt="profile picture" src={firebase.auth().currentUser.photoURL} />
        <h4>73 Points</h4>
        <p className='blue'>København N, 2200</p>
      </div>


      <div className='profile'>
      <Link to="/additem"> <button>Add new item</button></Link>
      </div>

      <div className='toppage'>
      <h1>Your Items</h1>
      </div>

      <Link to="/ItemProfile"><ItemCard/></Link>

      <div>
      </div>
    </div>
    </section>
  );
};

export default Profile;
