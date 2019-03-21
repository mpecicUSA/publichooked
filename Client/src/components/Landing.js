import React from 'react'
import {Container, Row, Col, Button, Card, CardImg, CardTitle, CardText, CardImgOverlay} from "reactstrap"

export default class Landing extends React.Component {
    render(){
        return (
            <Container> 
                <Row>
                    <Col>
                  
                    <p>
                     
                    </p>
                    <div>
                    <Card inverse>
                        <CardImg width="100%" src="https://anglr.com/wp-content/uploads/2019/01/homepage-collage-3000x1000.jpg" alt="Collage of fishermen holding fish" />
                        <CardImgOverlay>
                        <CardTitle>Improve your fishing</CardTitle>
                        <CardText>Understand why you caught a fish and how to do it better next time.</CardText>
                        </CardImgOverlay>
                    </Card>
                    </div>
                    <Button> 
                        Create your profile
                    </Button>
                    </Col>
                </Row>
                <Row>
                    <Col> 
                    White Space
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button>Get a pro's Classic Guide Pack</Button>
                    </Col>
                </Row>
                <Row> 
                    <Col> 
                    <h3>
                        Is Hooked for you?
                    </h3>
                    <ul>
                        <li>
                            Created by anglers, for anglers.
                        </li>
                        <li>
                            100% free. 100% private
                        </li>
                        <li>
                            optinal tracking accessories pair with app.
                        </li>
                        <li>
                            Access your profile from mobile to desktop
                        </li>
                    </ul>
                    <Row>
                        <Col>
                        <p>
                        Plan
                        Prepare and Explore
                        </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p>Record track and analyiaze</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col> 
                        
                        Improve, Compare and Collaborate
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}
