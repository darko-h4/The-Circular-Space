import React from "react";
import "./App.css";
import bike from './images/bike.jpg';

const ItemCard = () => {
  return (
    <section className="itemcard">

        <div className='itemimage'>
        <img className='itemimage'src={bike} alt="" height='140px' width='200px' />
        </div>
        
        <div className='itemtext'>
          <h2> Title </h2>
          <h4> Points </h4>
          <p>Location </p>
          <p>Availability</p>
        </div>

    </section>
  );
};

export default ItemCard;
