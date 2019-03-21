import React from "react"
import { Container, Button, Form, FormGroup, Label, Input, Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Register extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        confirmPassword: ""
    }
    updateState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render(){
        return(
        <Container>
            <h3>
                Register
            </h3>    
            <Form onSubmit={this.submit}>
            <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input type="text" name="firstName" id="firstName" placeholder="First name" value={this.state.firstName} onChange={this.updateState} />
            </FormGroup>
            
            <FormGroup>
                <Label for="lastName">First Name</Label>
                <Input type="text" name="lastName" id="lastName" placeholder="Last name" value={this.state.lastName} onChange={this.updateState} />
            </FormGroup>

            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="userName" id="userName" placeholder="Email" value={this.state.email} onChange={this.updateState} />
            </FormGroup>

            <FormGroup>
                <Label for="Password">Password</Label>
                <Input type="password" name="password" id="Password" placeholder="Password" value={this.state.password} onChange={this.updateState} />
            </FormGroup>

            <FormGroup>
                <Label for="Confirmpassword">Confirm Password</Label>
                <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.updateState} />
            </FormGroup>

                <Button>Submit</Button>
            </Form>
            <Col> 
                <Row>
                    <Link to='/login'>Login</Link>
                </Row>
            </Col>

        </Container>
        )
    }
}