import React from "react"
import { Button, Col, Row, Container } from "reactstrap"
class Header extends React.Component {
    editClicked = (e) => {
        console.log(e)
    }
render(){

    if(this.props.userData){
    return (
        <>
            <img className="userHeaderImage" src={require("../images/hunter-brumels-760768-unsplash.jpg")} height={"500px"} width={"100%"}alt="trout being released" />

            <Container>
                <Row>
                    <Col>
                        <img src={`${this.props.userData.userProfilePicURL}`} height={"150px"} width={"150px"} alt="user profile" />
                    </Col>
                    <Col>
                        <Button onClick={this.editClicked} >Edit Profile</Button>
                    </Col>
                </Row>
            </Container>

        </>
    )
    }else{
        return (
            <p>The Header has not rendered correctly</p>
        )
    }
    }
}

export default Header