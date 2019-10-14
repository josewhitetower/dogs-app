import React from 'react';

import dogs from './dogs';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar dogs={dogs}/>
    </div>
  );
}

export default App;
