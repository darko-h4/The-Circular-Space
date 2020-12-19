import React from "react";
import {DropdownPointsSelection} from "./components/DropdownSelectors";
import {ItemNameForm, ItemDescription} from "./components/FormFields";
import Nav from './Nav';
import {Link} from 'react-router-dom';
import {collection} from './fire';

console.log(collection.get());

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
          <ItemNameForm id="itemname"/>
          <br/>
          <p>Amount of points to borrow item  </p>
          <DropdownPointsSelection id="points"/>
          <br/>
          <br/>
          <ItemDescription id="description"/>
          </div>

        <div className='btnContainer'>
          <Link to ='adddetails' onClick={UploadItem}> 
    <button>Next</button></Link>
          </div>

    </div>
    </section>
    
    );

    };

    const UploadItem= () => {

      const item = document.querySelector("#itemname").value;
      const description = document.querySelector("#description").value;
      const points = document.querySelector("div.dropdown div").innerHTML;
    
        console.log("save " + item + " to Firestore");
        collection.add({
            Name: item,
            Description: description,
            Points: points,
        })
        .then (result => localStorage.setItem("id", result.id));
            console.log("Status saved!");
      
    } 

  
    
export default AddItemPage;

