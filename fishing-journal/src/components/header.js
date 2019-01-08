import React from "react"
import { Button } from "reactstrap"
class Header extends React.Component {
render(){
    return (
        <>
        <div className="userHeaderImageContainer">
            <img className="userHeaderImage" src={require("../images/hunter-brumels-760768-unsplash.jpg")} height={"500"} alt="trout being released" />
        </div>
        <div>
            <img src="https://via.placeholder.com/150" alt="user profile picture" />
            <Button>Edit Profile</Button>
        </div>
        </>
    )
    }
}

export default Header