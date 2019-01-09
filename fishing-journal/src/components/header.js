import React from "react"
import { Button } from "reactstrap"
class Header extends React.Component {
render(){
    if(this.props.userData){
    return (
        <>
        <div className="userHeaderImageContainer">
            <img className="userHeaderImage" src={require("../images/hunter-brumels-760768-unsplash.jpg")} height={"500px"} width={"70%"} alt="trout being released" />
        </div>
        <div>
            <img src={`${this.props.userData.userProfilePicURL}`} border-radius={"50%"}height={"150px"} width={"150px"} alt="user profile" />
            <Button>Edit Profile</Button>
        </div>
        </>
    )
    }else{
        return (
            <p>Nothing Here</p>
        )
    }
    }
}

export default Header