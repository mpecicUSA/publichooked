import React from "react"
import { Button, Form, FormGroup, Input, Container, Row, Col } from 'reactstrap';
import axios from "axios"
import {withRouter} from 'react-router-dom'
// const history = createHistory()
class AddTrip extends React.Component {
    state = {
        tripName: "",
        tripDate: Date,
        catches: Number, 
        userComments: "",
        starred: false
    }
    addTrip = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/add', {
            tripName: this.state.tripName,
            tripDate: this.state.tripDate,
            catches: this.state.catches, 
            userComments: this.state.userComments,
            starred: this.state.starred
        }).then(() => {
            this.props.history.push('/view')
            this.props.updateState(this.state)
        })
    }
    updateState = (e) => {
        this.setState({
                [e.target.name]: e.target.value
            })
    }
    updateBoolState = (e) => {
        this.setState(prevState => {
            return ({
                ...prevState,
                starred: !prevState.starred
            })
        })
    }



    render(){
        return (
            <>
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <h3>Add a trip!</h3>
                            <Form onSubmit={this.addTrip}>
                                <FormGroup>
                                    <Input type="string" onChange={this.updateState} name="tripName" value={this.state.tripName} id="tripName" placeholder="Trip Name" />
                                    <Input type="date" onChange={this.updateState} name="tripDate" value={this.state.date} id="tripDate" placeholder="Date" />
                                    <Input type="integer" onChange={this.updateState} name="catches" value={this.state.catches} id="catches" placeholder="Number of fish caught" />
                                    <Input type="textarea"  onChange={this.updateState} name="userComments" value={this.state.comments} id="userComments" placeholder="Comments"/>
                                    <Input type="checkbox" onChange={this.updateBoolState} name="starred" value={this.state.starred} id="starred" placeholder="Would you like to favorite this trip?"/>{'Would you like to favorite this trip?'}
                                </FormGroup>
                                <FormGroup>
                                  <Button>   Submit </Button>
                                </FormGroup >
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default withRouter(AddTrip)