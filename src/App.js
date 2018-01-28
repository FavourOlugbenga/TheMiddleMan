import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home";
import Pollution from "./Pages/Pollution";
import Profile from "./Pages/Profile";
import Signup from "./Pages/Signup";
import NavBar from "./NavBar";

import "./App.css";

const pages = [
    { name: "Home", component: Home },
  
    { name: "Signup", component: Signup }
];

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            page: Home
        };

        this.navigate = this.navigate.bind(this);
    }

    navigate(page) {
        this.setState({ page });
    }

    render() {
        const Page = this.state.page;
        return (
            <div className="app">
                <NavBar pages={pages} onChange={this.navigate} />
                <Page onChange={this.navigate}/>
            </div>
        );
    }
}


export default App;
