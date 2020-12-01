import React from "react";
import Nav from './Nav';
import {Link} from 'react-router-dom';
import bike from "./images/bike.jpg"

//toppage of the page after login, will be raplaced by header

const Hero = () => {
  return (
    <section className="main">
    <div className='mainContainer'> 
      <Nav/>

      <div className='toppage'>
      <h1>Welcome!</h1>
      </div>

      <div className='hero'>
      <img className="hero" src={bike} alt="bike" height='280px' width='440px' />
      <p><br/>This is your Circular space, are you are ready to get circular?  <br />
        Why don't you try out one of the options below?</p>
      </div>

      <div className='btnContainer'>
      <Link to="/ItemPage"><button>Go to Items</button></Link>
      <Link to='/additem'><button>+ Add Item</button></Link>
      <Link to='profile'><button className='white'>Go to my profile</button></Link>
      </div>

    </div>
    </section>
  );
};

export default Hero;
