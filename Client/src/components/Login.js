import React from "react"
import { Container, Button, Form, FormGroup, Label, Input, Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom';
export default class Login extends React.Component {
    state = {
        email: "",
        password: ""
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
                Login:
            </h3>    
            <Form onSubmit={this.submit}>
                <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="Email" placeholder="Email" value={this.state.email} onChange={this.updateState} />
                </FormGroup>

                <FormGroup>
                <Label for="Password">Password</Label>
                <Input type="password" name="password" id="Password" placeholder="Password" value={this.state.password} onChange={this.updateState} />
                </FormGroup>

                <Button>Submit</Button>
            </Form>
            <Col> 
                <Row>
                    <Link to='/register'>Register</Link>
                </Row>
            </Col>
        </Container>
        )
    }
}