import React, { Component } from 'react';
import './App.css';
import CompanyNavbar from "./components/CompanyNavbar"
import Overview from "./components/overview"
import UserHeader from "./components/userHeader"
import Stats from "./components/stats"
import AddTrip from "./components/addTrip"
import NoMatch from "./components/NoMatch"
import Login from './components/Login'
import Register from "./components/Register"
import Landing from './components/Landing'
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
        trips: [...prevState.trips, tripDetails]
      })
    })
  }
  logout = () => {
    console.log("logout clicked");
    this.setState({
      user: undefined, 
      trips: undefined
    });
    this.history.push('/login')
  }
  deleteState = (tripId) => {
    console.log("An trip with an id of", tripId, "was deleted")
      this.setState(prevState => ({
        trips: prevState.trips.reduce((acc, cv) => {
          if(cv.id === Number(tripId) ){
            return [...acc]
          }
          return [...acc, cv]
        },[])
  }))
}
  editState = (tripDetails, tripId) => {
    console.log("An trip with an id of", tripId, "was update")
      this.setState(prevState => ({
        trips: prevState.trips.reduce((acc, cv) => {
          if(cv.id === Number(tripId) ){
            return [
              ...acc, 
            tripDetails
            ]
          }
          return [...acc, cv]
        },[])
  }))
}
    render() {
      return (
        <div className="App">

            {/* Hooked Navbar - always display  */}
            <CompanyNavbar userData={this.state.user} logout={this.logout} />
            <Switch> 
            {/* Add a trip Component  */}
            <Route path="/landing" render={() => <Landing />} />
            <Route path="/add" render={()=> <AddTrip trips={this.state.trips} updateState={this.updateState} />} />
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
                      <UserHeader deleteState={this.deleteState} updateState={this.editState} theTrips={this.state.trips} />
                    </Row>
                  </Col>
                </Row>
              </Container>
            )}/>
            {/* Route to Login */}
            <Route path="/login" render={() => (
              <Container> 
                <Row>
                  <Col>
                    <Login />
                  </Col>
                </Row>
              </Container>
            )} />
            {/* Route to Registration */}
            <Route path="/register" render={() => (
              <Container> 
                <Row>
                  <Col>
                    <Register />
                  </Col>
                </Row>
              </Container>
            )} />
            <Route component={NoMatch} />
          </Switch>

        </div>
    );
  }
}

export default App;
