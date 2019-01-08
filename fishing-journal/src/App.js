import React, { Component } from 'react';
import './App.css';
import Header from "./components/header"
import CompanyNavbar from "./components/CompanyNavbar"
import Overview from "./components/overview"
import UserHeader from "./components/userHeader"


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <CompanyNavbar />
        <Header />
        <Overview />
        <UserHeader />
      </div>
    );
  }
}

export default App;
