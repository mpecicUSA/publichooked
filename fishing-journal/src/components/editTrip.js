import React from "react"
import {Modal, 
ModalHeader,
ModalBody,
ModalFooter,
Form, 
FormGroup, 
Input,
Button} from 'reactstrap';
import axios from "axios"


export default class EditTrip extends React.Component {
    state ={
        modal: true,
        tripName: this.props.theTrips.filter(trip => trip.id == this.props.tripId).map(trip => trip.tripName)[0],
        tripDate: this.props.theTrips.filter(trip => trip.id == this.props.tripId).map(trip => trip.tripDate)[0],
        catches:this.props.theTrips.filter(trip => trip.id == this.props.tripId).map(trip => trip.catches)[0],
        userComments: this.props.theTrips.filter(trip => trip.id == this.props.tripId).map(trip => trip.userComments)[0],
        pictureUrl: this.props.theTrips.filter(trip => trip.id == this.props.tripId).map(trip => trip.pictureUrl)[0],
        starred: this.props.theTrips.filter(trip => trip.id == this.props.tripId).map(trip => trip.starred)[0],
        id: this.props.tripId
    }
    updateState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    updateAPI = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/update/${this.props.tripId}`, {
            tripName: this.state.tripName,
            tripDate: this.state.tripDate,
            catches: this.state.catches, 
            userComments: this.state.userComments,
            starred: this.state.starred,
            pictureUrl: this.state.pictureUrl
        }).then(() => {
            this.props.updateState(this.state, this.props.tripId)
            this.setState((prevState)=>{
                return (
                    {...prevState,
                    modal: false}
                )
            })
        })
    }
    deleteAPI = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/delete/${this.props.tripId}`).then(() => {
            console.log("after delete API Axios Call")
            this.props.deleteState(this.props.tripId)
            console.log("after this.props.delete")
            this.setState({
                modal: false
            })
        })
    }
    
    render(){
        return (
            <>
            <Modal isOpen={this.state.modal} toggle={this.props.toggleModal} className={this.props.className}>
                <ModalHeader toggle={this.toggleModal}>Edit {this.state.tripName} </ModalHeader>
                <ModalBody>
                <Form onSubmit={this.updateAPI}>
                    <FormGroup>
                    <Input type="string" onChange={this.updateState} name="tripName" value={this.state.tripName} id="tripName"  />
                    <Input type="date" onChange={this.updateState} name="tripDate" value={this.state.tripDate} id="tripDate"  />
                    <Input type="number" onChange={this.updateState} name="catches" value={this.state.catches} id="catches"  />
                    <Input type="textarea"  onChange={this.updateState} name="userComments" value={this.state.userComments} id="userComments" />
                    <Input type="string" name="pictureUrl" id="pictureUrl" onChange={this.updateState} value={this.state.pictureUrl}/>
                    <Input type="checkbox" onChange={this.updateState} name="starred" value={this.state.starred} id="starred" />{'Favorite?'}
                    </FormGroup>
                </Form>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={this.updateAPI}>Save Changes</Button>{''}
                <Button color="secondary" onClick={this.props.toggleModal}>Cancel</Button>
                <Button color="danger" onClick={this.deleteAPI}>Delete</Button>
                </ModalFooter>
            </Modal>
            </>
        )
    }
}