import React, { Component } from 'react';
import './App.css';
import Header from "./components/header"
import CompanyNavbar from "./components/CompanyNavbar"
import Overview from "./components/overview"
import UserHeader from "./components/userHeader"
import Stats from "./components/stats"
import AddTrip from "./components/addTrip"

class App extends Component {
  state = {
  
  }
  //set state to API 
  async componentDidMount(){
    const response = await fetch('http://localhost:8000/trips/1')
    const json = await response.json()
    const response2 = await fetch('http://localhost:8000/users/1')
    const json2 = await response2.json()
    this.setState({ trips: json, user: json2})
  }
  render() {
    return (
      <div className="App">
      
        <CompanyNavbar />


        <Header userData={this.state.user}/>
        <Overview userData={this.state.user} />
        <Stats />
        <AddTrip />
        <UserHeader theTrips={this.state.trips}/>
      </div>
    );
  }
}

export default App;
