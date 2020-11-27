import React from "react";
import ItemPage from './ItemPage';
import Nav from './Nav';
import {Link} from 'react-router-dom';

//toppage of the page after login, will be raplaced by header

const Hero = () => {
  return (
    <section className="login">
      <Nav/>
      <h1>Welcome to your Circular Space!</h1>
      <p>If you are ready to get circular, why don't you try out one of the options below?</p>
      <Link to="/ItemPage"><button>Go to Items</button></Link>
      <Link to='/additem'><button>+ Add Item</button></Link>
      <Link to='profile'><button className='white'>Go to my profile</button></Link>
    </section>
  );
};

export default Hero;
