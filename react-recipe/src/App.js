// recipe-app/src/App.js
import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import data from './data/recipes.json'



function App() {
  return (
    <div className="App">
      <Menu recipes={data} title="YK반 20213784조희건"></Menu>
    </div>
  );
}

export default App;
