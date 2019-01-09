import React, { Component } from 'react';
import './App.css';
import Header from "./components/header"
import CompanyNavbar from "./components/CompanyNavbar"
import Overview from "./components/overview"
import UserHeader from "./components/userHeader"
import Stats from "./components/stats"
import AddTrip from "./components/addTrip"
import { BrowserRouter as Router, Route, Link, Switch }from "react-router-dom"

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
          {/* Hooked Navbar - always display  */}
          <CompanyNavbar />
        <Switch> 
           {/* Add a trip Component  */}
          <Route exact path="/add" component={AddTrip} />
          {/* View trips page, needs props for each  */}  
          <Route exact path="/view" render={() => (
            <>
              <Header userData={this.state.user} /> 
              <Overview userData={this.state.user}/>
              <UserHeader theTrips={this.state.trips}/>
              <Stats theTrips={this.state.trips} />
            </>
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
