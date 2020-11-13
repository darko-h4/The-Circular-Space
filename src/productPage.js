import React from "react";
import Toppage from "./toppage";
import Search from "./search";
import ProductCard from "./productCard";
import CategorySelection from "./categorySelection";
import ProductProfile from "./productProfile";
import {guitar} from "./productProfileExample";


const ProductPage = () => {
  return (
    <div className="productpage">
        
        <Toppage />
        <button>Choose Category</button>
        <CategorySelection />
        <Search />
        <ProductCard />
        <ProductProfile 
        name={guitar.name}
        image={guitar.image}
        technical_description={guitar.technical_description}
        description={guitar.description}
        user={guitar.user_profile}
        />
        
    </div>
  );
};      

export default ProductPage;
