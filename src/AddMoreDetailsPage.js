import React from "react";
import {DropdownCategorySelection, DropdownNumberSelection, DropdownDurationSelection, DropdownDeliverySelection, DropdownConditionSelection} from "./components/DropdownSelectors";
import {LocationForm} from "./components/FormFields";
import Nav from './Nav';
import {Link} from 'react-router-dom';
import {collection} from './fire';


const AddMoreDetailsPage= () => {  
return (
  <section className='main'>
  <div className='mainContainer'>
    <Nav/>
    <div className='toppage'>
    <h1>Add more details</h1>
    <h3>Adding these details will make it easier for others to find the product they are looking for.</h3>
    </div>

    <div className= "additem">
    <p>Category</p>
    <DropdownCategorySelection id="category"
    />
    <br/>
    <p>For how long do you wish to rent out your item?</p>
    <DropdownNumberSelection id="number"
    />
    <br/>
    <DropdownDurationSelection id="duration"
    />
    <br/>
    <p>Delivery method (physical pick-up or mail)</p>
    <DropdownDeliverySelection id="delivery"
    />
    <br/>
    <p>Condition of the item</p>
    <DropdownConditionSelection id="condition"
    />
    <br/>
    <LocationForm id="location"
    />

  </div>
  <div className='btnContainer'>
  <Link to="/itemadded" onClick={UpdateItem}><button>Upload Item</button></Link>
  </div>
</div>
</section>

);
};

const UpdateItem= () => {

  const id = localStorage.getItem("id");
  const category = document.querySelector("#category div").innerHTML;
  const number = document.querySelector("#number div").innerHTML;
  const duration = document.querySelector("#duration div").innerHTML;
  const delivery = document.querySelector("#delivery div").innerHTML;
  const condition = document.querySelector("#condition div").innerHTML;
  const location = document.querySelector("#location").value;

    console.log("update " + id + " to Firestore");
    collection.doc(id).update({
        Category: category,
        Number: number,
        Duration: duration, 
        Delivery: delivery,
        Condition: condition, 
        Location: location,

    }).then(function() {
        console.log("Status saved!");
    }).catch(function (error) {
        console.log("Got an error " + error);
    });
  
} 

export default AddMoreDetailsPage;


