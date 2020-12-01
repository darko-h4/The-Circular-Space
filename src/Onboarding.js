import React from "react";
import "./App.css";
import {Link} from 'react-router-dom';
import laptop from "./images/laptop.jpeg";
import items from "./images/items.jpg";
import blancitems from "./images/blancitems.jpg"
import Navlogin from './Navlogin';


export const Benefits = () => {
  return (
    <section className="main">
    <div className="mainContainer">
      <Navlogin/>
      < div className="toppage">
      <h1>1. Benefits</h1>
      </div>
      <div className='text'>
        <img className='onboarding' src={laptop} alt="laptop" />
        <h2>Why sharing is caring</h2>
        <p> Are you keen on providing a circular space for your items? This platform will allow you to borrow, give away and lend out items for free!</p>
        </div> 
      <div className="btnContainer">
      <Link to="/login"><button> Sign up</button></Link>
      <Link to="/Borrow"><button className='white'>Next</button></Link>
      </div>
    </div>
    </section>
  );
}

export const Borrow = () => {
  return (
    <section className="main">
    <div className="mainContainer">
    <Navlogin/>
    < div className="toppage">
      <h1>2. Borrow Items</h1>
      </div>
      <div className='text'>
        <img className='onboarding' src={items} alt="items" />
        <h2>How to borrow items'</h2>
        <p>You can use points to borrow items for a chosen period of time! Just find the product you want, check the availability of the lender and click the ‘borrow item’ button!</p>
      </div>
      <div className="btnContainer">
         <Link to="/login"> <button> Sign up</button> </Link>
        <Link to="/Lend"><button className='white'>Next</button></Link>
      </div>
     </div>
    </section>
  );
}

export const Lend = () => {
  return (
    <section className="main">
    <div className="mainContainer">
    <Navlogin/>
    < div className="toppage">
      <h1>3. Lend Out Items</h1>
      </div>
      <div className='text'>
        <img className='onboarding' src={blancitems} alt="items" />
        <h2>How to lend out items</h2>
        <p> Do you want to gain more points, and do you have any products catching dust? Give them away or lend them out. Upload your own items, easy as that!</p>
      </div>
      <div className="btnContainer">
        <Link to="/login"><button> Sign up</button></Link>
        <Link to="/login"><button className='white'>Login</button></Link> 
      </div>
      </div>
      </section>
  );
}
