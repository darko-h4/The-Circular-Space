import React from "react";
import {DropdownPointsSelection} from "./components/DropdownSelectors";
import {ItemNameForm, ItemDescription} from "./components/FormFields";

import Nav from './Nav';
import {Link} from 'react-router-dom';


const AddItemPage= () => {  
    return (
      <section className='main'>
      <div className='mainContainer'>
        <Nav/>
        <div className='toppage'>
        <h1>Add your item</h1>
        <h3>Make people know why they should borrow your item.</h3>
        </div>

        <div className= "additem">
          <ItemNameForm />
          <br/>
          <p>Amount of points to borrow item  </p>
          <DropdownPointsSelection/>
          <br/>
          <br/>
          <ItemDescription/>
          </div>

        <div className='btnContainer'>
          <Link to ='adddetails'><button>Next</button></Link>
          </div>

    </div>
    </section>
    
    );
    };
    
    export default AddItemPage;
    