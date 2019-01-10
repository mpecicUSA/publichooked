import React from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Modal, 
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form, 
  FormGroup, 
  Input} from 'reactstrap';
import classnames from 'classnames';

class UserHeader extends React.Component {
  state = {
      
  }
    constructor(props) {
        super(props);
        this.state = {
          activeTab: 'Recent_Activity',
          activeIndex: 0,
          modal: false,
          id: Number,
          tripName: "",
          tripDate: Date, 
          starred: false, 
          pictureUrl: "",
          catches: Number
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === this.props.photos.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? this.props.photos.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
            activeTab: tab
            });
        }
    }
    toggleModal(e) {
      this.setState({
        modal: !this.state.modal,
        trip_id_clicked: e.target.value
      });
    }
    updateState = (e) => {
      console.log(e.target.value)
    }
  
    
render(){
    if(this.props.theTrips){
      const { activeIndex } = this.state;
      const slides = this.props.trips.map((item) => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.id}
            trip_id={item.trip_id}
          >
            <img src={item.pictureUrl} alt={item.altText} />
          </CarouselItem>
        );
      })
      let theTrips = this.props.theTrips
      let tripCards = theTrips.map(trip => 
        <div key={trip.id} detail={trip}>
          <Row>
            <Col sm="12">
              <Card body>
              <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                >
                  <CarouselIndicators items={this.props.photos.filter(photo => photo.trip_id === trip.id)} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                  {slides.filter(slide => slide.props.trip_id === trip.id)}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
                <CardTitle>{trip.tripName} </CardTitle>
                <CardTitle>{trip.tripDate}</CardTitle>
                {trip.starred ? <p>Favorited</p> : null}
                <CardText>Fish Caught: {trip.catches}</CardText>
                <CardText>{trip.userComments}</CardText>
                <Button value={trip.id} onClick={this.toggleModal}>Edit this trip</Button>
              </Card>
            </Col>
        </Row>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
        <ModalHeader toggle={this.toggleModal}>Edit {theTrips.filter(trip => trip.id == this.state.trip_id_clicked).map(trip => trip.tripName)[0]} </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Input type="string" onChange={this.updateState} name="tripName" value={theTrips.filter(trip => trip.id == this.state.trip_id_clicked).map(trip => trip.tripName)[0]} id="tripName"  />
              <Input type="date" onChange={this.updateState} name="tripDate" value={theTrips.filter(trip => trip.id == this.state.trip_id_clicked).map(trip => trip.tripDate)[0]} id="tripDate"  />
              <Input type="integer" onChange={this.updateState} name="catches" value={theTrips.filter(trip => trip.id == this.state.trip_id_clicked).map(trip => trip.catches)[0]} id="catches"  />
              <Input type="textarea"  onChange={this.updateState} name="userComments" value={theTrips.filter(trip => trip.id == this.state.trip_id_clicked).map(trip => trip.userComments)[0]} id="userComments" />
              <Input type="string" name="pictureUrl" id="pictureUrl" placeholder="add a photo url here"/>
              <Input type="checkbox" onChange={this.updateBoolState} name="starred" value={theTrips.filter(trip => trip.id == this.state.trip_id_clicked).map(trip => trip.starred)[0]} id="starred" />{'Favorite?'}
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggleModal}>Save Changes</Button>{''}
          <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
        </div>
        )
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