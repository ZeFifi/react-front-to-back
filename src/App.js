import React from 'react';
import './App.css';
import Navbar from "./components/Layout/Navbar";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className="App">
      <Navbar icon="fab fa-github" />
        <div className="container">
            <Users />
        </div>
    </div>
  );
}

export default App;
