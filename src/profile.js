import React, {useState, useEffect} from "react";
import picture from "./images/profile.jpg";
import {Link} from "react-router-dom";
import Nav from './Nav';
import ItemCard from "./ItemCard";
import {fire} from './fire';


const Profile = () => {
  const [BorrowedItems, setItems] = useState([]); //tilføjet

  const ref = fire.firestore().collection("BorrowedItems");

  function getItems() {
    ref.onSnapshot((querySnapshot) => {
      const documents = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        documents.push(doc.data());
    });
      setItems(documents);
    });
  }
  useEffect(() => {
    getItems();
  }, []);

  return (
    <section className='main'>
    <div className='mainContainer'>
      <Nav/>
      <div className='toppage'>
      <h1>Your Profile</h1>
      </div>
      
      <div className="usercard">
        <h4>Points</h4>
        <p className='blue'>Location</p>
      </div>


      <div className='profile'>
      <Link to="/additem"> <button>Add new item</button></Link>
      </div>

      <div className='toppage'>
      <h1>Borrowed Items</h1>

      <ul>
            
            {BorrowedItems.map((item) => ( 
              <section className="itemcard">
             <ul key={item.id}>
                 <div className='itemtext'>
               <h2>{item.Name}</h2>
               <p> Available for {item.Number} {item.Duration}</p> 
               <p className='blue'> {item.Location} </p>
               </div>
               </ul>
               </section>
            ))}
            </ul>

      </div>
    </div>
    </section>
  );
};

export default Profile;
