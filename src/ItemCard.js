import React from "react";
import "./App.css";
import bike from './images/bike2.jpg';

const ItemCard = () => {
  return (
    <section className="itemcard">

        <div className='itemimage'>
        <img className='itemimage'src={bike} alt="" height='140px' width='200px' />
        </div>
        
        <div className='itemtext'>
          <h2> As New Racing Bike </h2>
          <h4> 30 Points </h4>
          <p>Available for 3 weeks</p>
          <p className='blue'>2400 NV, Copenhagen  </p>
        </div>

    </section>
  );
};

/* add fetch function 

const itemRef = db.collection('Items').doc('SF');
const doc = await cityRef.get();
if (!doc.exists) {
  console.log('No such document!');
} else {
  console.log('Document data:', doc.data());
}

*/

export default ItemCard;
