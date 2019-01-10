import React from "react"
import {Modal, 
ModalHeader,
ModalBody,
ModalFooter,
Form, 
FormGroup, 
Input,
Button} from 'reactstrap';


export default class EditTrip extends React.Component {
    state ={
        modal: true
    }
    toggleModal() {
        this.props.toggleModal();
        this.setState({
          modal: !this.state.modal
        });
      }
    render(){
        return (
            <>
            <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                <ModalHeader toggle={this.toggleModal}>Edit {this.props.theTrips.filter(trip => trip.id == this.props.tripId).map(trip => trip.tripName)[0]} </ModalHeader>
                <ModalBody>
                <Form>
                    <FormGroup>
                    <Input type="string" onChange={this.updateState} name="tripName" value={this.props.theTrips.filter(trip => trip.id == this.props.tripId).map(trip => trip.tripName)[0]} id="tripName"  />
                    <Input type="date" onChange={this.updateState} name="tripDate" value={this.props.theTrips.filter(trip => trip.id == this.props.tripId).map(trip => trip.tripDate)[0]} id="tripDate"  />
                    <Input type="integer" onChange={this.updateState} name="catches" value={this.props.theTrips.filter(trip => trip.id == this.props.tripId).map(trip => trip.catches)[0]} id="catches"  />
                    <Input type="textarea"  onChange={this.updateState} name="userComments" value={this.props.theTrips.filter(trip => trip.id == this.props.tripId).map(trip => trip.userComments)[0]} id="userComments" />
                    <Input type="string" name="pictureUrl" id="pictureUrl" placeholder="add a photo url here"/>
                    <Input type="checkbox" onChange={this.updateBoolState} name="starred" value={this.props.theTrips.filter(trip => trip.id == this.props.tripId).map(trip => trip.starred)[0]} id="starred" />{'Favorite?'}
                    </FormGroup>
                </Form>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={this.toggleModal}>Save Changes</Button>{''}
                <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
            </>
        )
    }
}