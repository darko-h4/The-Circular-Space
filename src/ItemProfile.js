import React from "react";
import "./App.css";

const ItemProfile = (props) => {
  return (
    <div className="itemprofile">
        
        <h1>{props.name}</h1>
        <img src={props.image} />

        <div className="itemcard">
            <div>{props.technical_description}</div>
        </div>

        <div className="itemcard">
            <div>{props.description}</div>
        </div>

        <div className="itemcard">
            <div>{props.user_profile}</div>
        </div>
        
    </div>
  );
};      

export default ItemProfile;