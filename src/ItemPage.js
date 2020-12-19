import React, {useState, useEffect} from "react";
import Search from "./search";
import Nav from './Nav';
import {Link} from 'react-router-dom';
import {fire} from './fire';

export const RenderItems = () => {
  const [Items, setItems] = useState([]);

  const ref = fire.firestore().collection("Items");


  function getItems() {
    ref.onSnapshot((querySnapshot) => {
      const documents = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        const item = doc.data();
        item.id = doc.id;
        documents.push(item);
    });
      setItems(documents);
    });
  }
  useEffect(() => {
    getItems();
  }, []);
  
  return (  
        <section className="main">
                <div className='mainContainer'>
                <Nav/> 
                <div class='toppage'>
                <h1>Items</h1>
                <Link to='/category'><button className="outline">Choose Category</button></Link>
                <Search />
                </div>
            <ul>
            
            
          {Items.map((item) => (
              <Link to='/ItemProfile' onClick={() => SaveId(item)}> <section className="itemcard">
           <ul key={item.id}>
               <div className='itemtext'>
             <h2>{item.Name}</h2>
             <p> Available for {item.Number} {item.Duration}</p> 
             <p className='blue'> {item.Location} </p>
             </div>
  
             </ul>
             </section></Link>

          ))}
          </ul>
          </div>
          </section>
    
  );
};      

function SaveId(item){

localStorage.setItem("id", item.id);
  console.log(item);

}


export default RenderItems;
