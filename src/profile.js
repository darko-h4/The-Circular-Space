//profilepage of user

import React from "react";
import Product from "./product.js";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <div className="usercard">
        <img className="profilepicture" alt=""></img>
        <h4>Points</h4>
        <p>Location</p>
      </div>
      <button>Add new item</button>
      <div>
        <Product />
      </div>
    </div>
  );
};

export default Profile;
