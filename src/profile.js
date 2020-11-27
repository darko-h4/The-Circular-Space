//profilepage of user

import React from "react";
import ItemProfile from "./ItemProfile.js";
import {Link} from "react-router-dom";
import Nav from './Nav';

const Profile = () => {
  return (
    <div className='standardlo'>
      <Nav/>
      <h1>Profile Page</h1>
      <div className="usercard">
        <img className="profilepicture" alt=""></img>
        <h4>Points</h4>
        <p>Location</p>
      </div>
      <Link to="/additem"> 
      <button>Add new item</button></Link>
      <div>
      </div>
    </div>
  );
};

export default Profile;
