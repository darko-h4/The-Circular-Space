import React from "react";
import "./App.css";
import {Link} from 'react-router-dom';
import laptop from "./images/laptop.jpeg";
import tools from "./images/tools.jpeg";
import guitar from "./images/guitar.jpeg"
import Navlogin from './Navlogin';


export const Benefits = () => {
  return (
    <section className="main">
    <div className="mainContainer">
      <Navlogin/>
      <h1>1. Benefits</h1>
      <h2>Why sharing is caring</h2>
      <p>Are you keen on providing a circular space for your items? This platform will allow you to borrow, give away and lend out items for free!</p>
        <img id="rcorners" src={laptop} alt="laptop" />
      <div className="btnContainer">
      <Link to="/login"><button> Sign up</button></Link>
      <r className="btnContainer">
      <Link to="/Borrow"><button>Next</button></Link>
      </r>
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
      <h1>2. Borrow Items</h1>
      <h2>How to borrow items'</h2>
      <p>You get 100 points for free when you create your account. You can use the points to borrow items for a chosen period of time! Just find the item you want, check the availability of the lender and click the ‘borrow item’ button!</p>
      <img id="rcorners" src={tools} alt="tool" />
         <div className="btnContainer">
         <Link to="/login"> <button> Sign up</button> </Link>
      <r className="btnContainer">
      <Link to="/Lend"><button>Next</button></Link>
      </r>
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
      <h1>3. Lend Out Items</h1>
      <h3>How to lend out items</h3>
      <p>Do you want to gain more points, and do you have any items catching dust? Give them away or lend them out. Upload some details about your item, decide the amount of points you would like to receive and lend it out, easy as that!</p>
      <img id="rcorners" src={guitar} alt="guitar" />
        <div className="btnContainer">
        <Link to="/login"><button> Sign up</button></Link> 
      <r className="btnContainer">
      <button>Next</button> 
      </r>
      </div>
      </div>
      </section>
  );
}
