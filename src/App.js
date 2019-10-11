import React from 'react';
import './App.css';
import Navbar from "./components/Layout/Navbar";
import UserItem from "./components/Users/UserItem";

function App() {
  return (
    <div className="App">
      <Navbar icon="fab fa-github" />
      <UserItem />
    </div>
  );
}

export default App;
