import React from "react";
import "./App.css";
import Nav from './Nav';

const ItemProfile = (props) => {
  return (
    <div className="standardlo">
        <Nav/>
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