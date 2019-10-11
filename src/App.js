import React, { Component } from 'react';
import axios from "axios";
import Navbar from "./components/Layout/Navbar";
import Users from "./components/Users/Users";

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: false
        }
    }

    async componentDidMount() {
        this.setState({ loading: true});
        const res = await axios.get("https://api.github.com/users");
        this.setState({users: res.data, loading: true})
    }

    render() {
        const { loading, users } = this.state;
        return (
        <div className="App">
          <Navbar icon="fab fa-github" />
            <div className="container">
                <Users loading={loading} users={users} />
            </div>
        </div>
      );
    }

}

export default App;
