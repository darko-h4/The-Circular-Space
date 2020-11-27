import React from "react";
import {DropdownCategorySelection, DropdownNumberSelection, DropdownDurationSelection, DropdownDeliverySelection, DropdownConditionSelection} from "./components/DropdownSelectors";
import {LocationForm} from "./components/FormFields";
import Nav from './Nav';


const AddMoreDetailsPage= () => {  
return (
  <div className='standardlo'>
    <Nav/>
    <h1>Add more details</h1>
    <h3>Add details to make it easier for others to find the product they are looking for.</h3>
    <div className= "dropdownSizings">
    <label>Category</label>
    <DropdownCategorySelection
    />
    <label>For how long do you wish to rent out your item? </label>
    <DropdownNumberSelection
    />
    <DropdownDurationSelection
    />
    <label>Delivery method (physical pick-up or mail)</label>
    <DropdownDeliverySelection
    />
    <label>Condition of the item</label>
    <DropdownConditionSelection
    />
    <LocationForm
    />
  </div>
  <button>Upload Item</button>
</div>

);
};

export default AddMoreDetailsPage;
