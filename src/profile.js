import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Nav from './Nav';
import {fire} from './fire';


const Profile = () => {
  const [BorrowedItems, setItems] = useState([]); 

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
      <h1>Welcome {fire.auth().currentUser.displayName}</h1>
      </div>
      
      <div className="usercard">
      <img alt="profile picture" src={fire.auth().currentUser.photoURL} />
        <h4>73 Points</h4>
        <p className='blue'>København N, 2200</p>
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
               <p>Available for {item.Number} {item.Duration}</p> 
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
