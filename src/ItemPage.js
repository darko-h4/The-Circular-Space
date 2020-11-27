import React from "react";
import Toppage from "./toppage";
import Search from "./search";
import ItemCard from "./ItemCard";
import CategorySelection from "./categorySelection";
import ItemProfile from "./ItemProfile";
import {guitar} from "./ItemProfileExample";
import {Link} from 'react-router-dom';


const ItemPage = () => {
  return (
    <div className="itempage">
        
        <Toppage />
        <button>Choose Category</button>
        <CategorySelection />
        <Search />
        <Link to="/itemcheckout"><ItemCard /></Link>
        <ItemProfile 
        name={guitar.name}
        image={guitar.image}
        technical_description={guitar.technical_description}
        description={guitar.description}
        user={guitar.user_profile}
        />
        
    </div>
  );
};      

export default ItemPage;
