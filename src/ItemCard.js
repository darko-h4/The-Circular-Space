import React from "react";
import "./App.css";

const ItemCard = () => {
  return (
    <section className="itemcard">

        <div className='itemimage'>
        </div>
        
        <div className='itemtext'>
          <h2> Description </h2>
          <h4> Points </h4>
          <p>Available for</p>
          <p className='blue'>Location  </p>
        </div>

    </section>
  );
};


export default ItemCard;
