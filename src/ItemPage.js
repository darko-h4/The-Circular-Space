import React from "react";
import Search from "./search";
import ItemCard from "./ItemCard";
import CategorySelection from "./categorySelection";
import ItemProfile from "./ItemProfile";
import {guitar} from "./ItemProfileExample";
import Nav from './Nav';
import {Link} from 'react-router-dom';



const ItemPage = () => {
    
  return (
    <section className="main">
      <div className='mainContainer'>
      <Nav/>
        <div class='toppage'>
          <h1>Products</h1>
          <h3> Find your next circular item!</h3> 
          <Search />
        </div>
        <Link to="/ItemProfile"><ItemCard/></Link>
        <Link to="/ItemProfile"><ItemCard/></Link>
        <Link to="/ItemProfile"><ItemCard/></Link>
        <Link to="/ItemProfile"><ItemCard/></Link>
        <Link to="/ItemProfile"><ItemCard/></Link>
        <Link to="/ItemProfile"><ItemCard/></Link>
    </div>  
    </section>
  );
};      

export default ItemPage;
