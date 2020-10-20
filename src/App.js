import React from 'react';
import Homepage from './Homepage';
import './App.css';
import {firstHomepage, secondHomepage, thirdHomepage} from './homepages';

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
