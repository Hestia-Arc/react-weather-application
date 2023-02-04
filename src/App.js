import React from 'react';
import './App.css';

// components
import Search from "./components/Search";
import Info from "./components/Info";
import Temp from "./components/Temp";
import Forecast from "./components/Forecast";
import Source from "./components/Source";

function App() {
  return (
    <div className="App container border">
      <Search />
      <Info />
      <Temp />
      <hr />
      <Forecast />
      <hr />
      <Source />
  </div>
  );
}

export default App;
