

import React, { useState } from 'react';
import Header from '../../../templates/Header';

const Home=()=> {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    
    <div>
      <Header
        titulo = "Primer Prueba DANE"
      />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


export default Home;