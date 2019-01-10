import React, { Component } from 'react';
import './App.css';
import CompanyNavbar from "./components/CompanyNavbar"
import Overview from "./components/overview"
import UserHeader from "./components/userHeader"
import Stats from "./components/stats"
import AddTrip from "./components/addTrip"
import NoMatch from "./components/NoMatch"
import { BrowserRouter as Router, Route, Link, Switch }from "react-router-dom"
import {Col, Row, Container} from "reactstrap"

class App extends Component {
  state = {
  
  }

  async componentDidMount(){
    //pull all trips

    const response = await fetch('http://localhost:8000/trips/1')
    const json = await response.json()
    //pull all data for user1

    const response2 = await fetch('http://localhost:8000/users/1')
    const json2 = await response2.json()
    //seperate table for multiple photos
    
    // const response3 = await fetch('http://localhost:8000/photos')
    // const json3 = await response3.json()
    //set state to API 

    this.setState({ trips: json, user: json2})
    // this.setState({ trips: json, user: json2, photos: json3})

  }
  updateState = (tripDetails) => {
    console.log(tripDetails)
    this.setState((prevState) => {
      return ({
        trips: {...prevState, tripDetails}
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
      <Route exact path="/add" render={()=> <AddTrip trips={this.state.trips} updateState={this.updateState} />} />
            {/* View trips page, needs props for each  */}  
            <Route path="/view" render={() => (
              <Container>
                 <Row>
                  <Col>
                    <Overview userData={this.state.user} />
                    <Stats theTrips={this.state.trips} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <UserHeader theTrips={this.state.trips} />
                    </Row>
                  </Col>
                </Row>
              </Container>
            )}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
    );
  }
}

export default App;
