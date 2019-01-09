import React, { Component } from 'react';
import './App.css';
import Header from "./components/header"
import CompanyNavbar from "./components/CompanyNavbar"
import Overview from "./components/overview"
import UserHeader from "./components/userHeader"
import Stats from "./components/stats"
import AddTrip from "./components/addTrip"
import { BrowserRouter as Router, Route, Link, Switch }from "react-router-dom"
import {Col, Row, Container} from "reactstrap"

class App extends Component {
  state = {
  
  }
  //set state to API 
  async componentDidMount(){
    const response = await fetch('http://localhost:8000/trips/1')
    const json = await response.json()
    const response2 = await fetch('http://localhost:8000/users/1')
    const json2 = await response2.json()
    const response3 = await fetch('http://localhost:8000/photos')
    const json3 = await response3.json()
    this.setState({ trips: json, user: json2, photos: json3})
  }
  updateState = (lowerState) => {
    console.log(lowerState)
    this.setState(prevState => {
      return ({
        ...prevState, 
        trips: [{
          ...prevState.trips,
          lowerState
        }]
      })
    })
  }
  render() {
    return (
      <div className="App">
          {/* Hooked Navbar - always display  */}
          <CompanyNavbar />
        <Switch> 
           {/* Add a trip Component  */}
    <Route exact path="/add" render={()=> <AddTrip updateState={this.updateState} />} />
          {/* View trips page, needs props for each  */}  
          <Route exact path="/view" render={() => (
            <Container>
              <Row>
                <Col>
                  <Row>
                    <Header userData={this.state.user} /> 
                    <Overview userData={this.state.user} />
                  </Row>
                  <Row>
                    <UserHeader photos={this.state.photos} theTrips={this.state.trips} />
                  </Row>
                </Col>
              <Row>
                <Col>
                  <Stats theTrips={this.state.trips} />
                </Col>
              </Row>
              </Row>
            </Container>
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
