import React from "react"
import { Button, Form, FormGroup, Input, Container, Row, Col } from 'reactstrap';
class AddTrip extends React.Component {
    render(){
        return (
            <>
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <h3>Add a trip!</h3>
                            <Form>
                                <FormGroup>

                                    <Input type="string" name="tripName" id="tripName" placeholder="Trip Name" />
                                    <Input type="date" name="tripDate" id="tripDate" placeholder="Date" />
                                    <Input type="integer" name="catches" id="catches" placeholder="Number of fish caught" />
                                    <Input type="string" name="pictureUrl" id="pictureUrl" placeholder="Url of Picture" />
                                    <Input type="textarea" name="userComments" id="userComments" placeholder="Comments"/>
                                    <Input type="boolean" name="starred" id="starred" placeholder="Would you like to favorite this trip?"/>

                                    <Button> Submit </Button>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default AddTrip