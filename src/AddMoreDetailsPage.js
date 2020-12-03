import React from "react";
import {DropdownCategorySelection, DropdownNumberSelection, DropdownDurationSelection, DropdownDeliverySelection, DropdownConditionSelection} from "./components/DropdownSelectors";
import {LocationForm} from "./components/FormFields";
import Nav from './Nav';
import {Link} from 'react-router-dom';



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
    <DropdownCategorySelection
    />
    <br/>
    <p>For how long do you wish to rent out your item? </p>
    <DropdownNumberSelection
    />
    <br/>
    <DropdownDurationSelection
    />
    <br/>
    <p>Delivery method (physical pick-up or mail)</p>
    <DropdownDeliverySelection
    />
    <br/>
    <p>Condition of the item</p>
    <DropdownConditionSelection
    />
    <br/>
    <LocationForm
    />

  </div>
  <div className='btnContainer'>
  <Link to="/itemadded"><button>Upload Item</button></Link>
  </div>
</div>
</section>

);
};

export default AddMoreDetailsPage;
