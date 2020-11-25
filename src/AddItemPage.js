import React from "react";
import {DropdownPointsSelection} from "./components/DropdownSelectors";
import {ItemNameForm, ItemDescription} from "./components/FormFields";

const AddItemPage= () => {  
    return (
      <div>
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
      <button>Next</button>
    </div>
    
    );
    };
    
    export default AddItemPage;
    