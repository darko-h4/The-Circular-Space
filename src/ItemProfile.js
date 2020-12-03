import React from "react";
import "./App.css";
import Nav from './Nav';
import profile from './images/profile.jpg';
import bike from './images/bike2.jpg';
import {Link} from 'react-router-dom';

const ItemProfile = () => {
  return (
    <section className='main'>
    <div className="mainContainer">
      <Nav/>
      <div className='toppage'>
        <h1>As New Racing Bike</h1>
        <img className='itemprofile' src={bike} alt='bike'/>
      </div>
        

        <div className="itemprofilecard">
        <h4>Points</h4>
        <p>Available for: 3 weeks</p>
        <p>Condition: As good as new</p>
        <p>Delivery: Pick up</p>
        </div>


        <div className="itemprofilecard">
         <h2>Description of Item</h2>
         <p> I will be on vacation for 3 weeks, and since the holiday season its on its way, you might want to start your 
           exercising skills, and get fit for 2021! I will therefore be offering my racing bike for 3 weeks, which can hopefully help someone out!
           You can pick it up close to Norrebro st. at 2400 NV, Copenhagen. 30 points and its yours!
         </p>
        </div>

        <div className="itemprofileusercard">
          <div className='itemprofileimage'>
            <img className='itemimage'src={profile} alt="" height='140px' width='200px' />
          </div>
        
          <div className='itemprofiletext'>
            <h2>Arthur Jansen</h2>
            <p className='blue'>2400 NV, Copenhagen  </p>
          </div>
        </div>

        <div className='btnContainer'>
          <Link to='/itemcheckout'><button>Borrow This Item!</button></Link>
        </div>
        
    </div>
    </section>
  );
};      

export default ItemProfile;