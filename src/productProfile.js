import React from "react";

const ProductProfile = (props) => {
  return (
    <div className="productprofile">
        
        <h1>{props.name}</h1>
        <img src={props.image} />

        <div className="productcard">
            <div>{props.technical_description}</div>
        </div>

        <div className="productcard">
            <div>{props.description}</div>
        </div>

        <div className="productcard">
            <div>{props.user_profile}</div>
        </div>
        
    </div>
  );
};      

export default ProductProfile;