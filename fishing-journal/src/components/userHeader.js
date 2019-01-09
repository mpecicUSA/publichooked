import React from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';
import classnames from 'classnames';

class UserHeader extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
        activeTab: 'Recent_Activity'
        };
    }
    
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
            activeTab: tab
            });
        }
    }
render(){
    if(this.props.theTrips){
      let theTrips = this.props.theTrips
      let tripCards = theTrips.map(trip => 
        <div key={trip.id} detail={trip}>
          <Row>
            <Col sm="6">
              <Card body>
              <CardImg top width="100%" src={`${trip.pictureUrl}`} alt="Card image cap" />
                <CardTitle>{trip.tripName} </CardTitle>
                <CardTitle>{trip.tripDate}</CardTitle>
                {trip.starred ? <p>Starred</p> : <p>Not Starred</p>}
                <CardText>Fish Caught:{trip.catches}</CardText>
                <CardText>{trip.userComments}</CardText>
                <Button>Edit this trip</Button>
              </Card>
            </Col>
        </Row>
        </div>
        )
        console.log(Date.now())
      return (
        <>
    <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'Recent_Activity' })}
              onClick={() => { this.toggle('Recent_Activity'); }}
            >
              This Month's Trips
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'My_Trips' })}
              onClick={() => { this.toggle('My_Trips'); }}
            >
              My Trips
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'My_Catches' })}
              onClick={() => { this.toggle('My_Catches'); }}
            >
              My Catches
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'My_Photos' })}
              onClick={() => { this.toggle('My_Photos'); }}
            >
              My Photos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'Favorites' })}
              onClick={() => { this.toggle('Favorites'); }}
            >
            Favorites
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="Recent_Activity">
            {tripCards.map(trips => <div>
              {trips.props.detail.tripDate}

            </div>
              )}
          </TabPane>
          <TabPane tabId="My_Trips">
            {tripCards}
          </TabPane>
          <TabPane tabId="My_Catches">
            {tripCards.filter(trips => trips.props.detail.catches > 0)}
          </TabPane>
          <TabPane tabId="My_Photos">
            {tripCards.map(trips => 
            <div>
              <img src={`${trips.props.detail.pictureUrl}`} alt={trips.id}></img>
            </div> 
            )}
          </TabPane>
          <TabPane tabId="Favorites">
            {tripCards.filter(trips => trips.props.detail.starred === true)}
          </TabPane>
        </TabContent>
      </div>
        </>
    )
      }
    else{
      return (
        <>
          <p>"Nothing Here"</p>
        </>
      )
    }
    }
}

export default UserHeader