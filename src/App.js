import React from 'react';
import Homepage from './Homepage';
import './App.css';


const firstHomepage = {

  title: '1. Benefits',
  subtitle: 'Why sharing is caring',
  img: '',
  description: 'Are you keen on providing a circular space for your products? This platform will allow you to borrow, give away and lend out items for free!'
}

const secondHomepage = {

  title: '2. Borrow Items',
  subtitle: 'How to borrow items',
  img: '',
  description: 'You get 100 points for free when you create your account. You can use the points to borrow items for a chosen period of time! Just find the product you want, check the availability of the lender and click the ‘borrow item’ button!'
}

const thirdHomepage = {

  title: '3. Lend Out Items',
  subtitle: 'How to lend out items',
  img: '',
  description: 'Do you want to gain more points, and do you have any products catching dust? Give them away or lend them out. Upload some details about your item, decide the amount of points you would like to receive and lend it out, easy as that!'
}

function App() {
  return (
    <div>
      <Homepage 
      title={firstHomepage.title}
      subtitle={firstHomepage.subtitle}
      img={firstHomepage.img}
      description={firstHomepage.description}
      />

      <Homepage 
      title={secondHomepage.title}
      subtitle={secondHomepage.subtitle}
      img={secondHomepage.img}
      description={secondHomepage.description}
      />

      <Homepage 
      title={thirdHomepage.title}
      subtitle={thirdHomepage.subtitle}
      img={thirdHomepage.img}
      description={thirdHomepage.description}
      />
    </div>
  );
}

export default App;
