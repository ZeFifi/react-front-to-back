import React, { Component } from 'react';
import axios from "axios";
import Navbar from "./components/Layout/Navbar";
import Users from "./components/Users/Users";

import './App.css';
import Search from "./components/Users/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false
    }
  }

  searchUsers = async (text) => {
    this.setState({ isLoading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    this.setState({users: res.data.items, isLoading: false});
  };

  render() {
    const { isLoading, users } = this.state;
    return (
      <div className="App">
        <Navbar icon="fab fa-github" />
        <div className="container">
          <Search searchUsers={this.searchUsers}/>
          <Users loading={isLoading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
