import React from "react";
import Nav from './Nav';

const CategorySelection = () => {
  return (
    <section className="main">
      <div className='mainContainer'>
      <Nav/>
        <div class='toppage'>
          <h1>Categories</h1> 
        </div>
        <div className="categories">
        <h3>Home</h3>
        <div className="categoryselection">
          <button className='outline'>Kitchen</button>
          <button className='outline'>Bathroom</button>
          <button className='outline'>Furniture</button>
          <button className='outline'>Accessories</button>
        </div>
        
        <h3>Hobbies</h3>

        <div className="categoryselection">
          <button className='outline'>Music</button>
          <button className='outline'>Creative</button>
        </div>
        
        <h3>Activity</h3>
        <div className="categoryselection">
          <button className='outline'>Sports</button>
          <button className='outline'>Outdoor</button>
        </div>
       
        <div className="categoryselection">
        <button className='outline'>Others</button>
        </div>
        </div>
      </div>
    </section>    
  );
};      

export default CategorySelection;