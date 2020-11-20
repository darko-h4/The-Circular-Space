//profilepage of user

import React from "react";
import ProductProfile from "./productProfile.js";
import {Link} from "react-router-dom";

const Profile = () => {
  return (
    <div>
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
