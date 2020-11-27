import React from "react";
import {DropdownPointsSelection} from "./components/DropdownSelectors";
import {ItemNameForm, ItemDescription} from "./components/FormFields";
import Nav from './Nav';
import {Link} from 'react-router-dom';


const AddItemPage= () => {  
    return (
      <div className='standardlo'>
        <Nav/>
        <h1>Add your item</h1>
        <h3>Make people know why they should borrow your item.</h3>
        <div className= "dropdownSizings">
        
        <ItemNameForm
        />
        <label>Amount of points to borrow item </label>
        <DropdownPointsSelection
        />
        <ItemDescription
        />
      </div>
      <Link to ='adddetails'><button>Next</button></Link>
    </div>
    
    );
    };
    
    export default AddItemPage;
    