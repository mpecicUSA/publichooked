import React from "react"

class Overview extends React.Component {
render(){
    return (
        <>
        <div className="leftAlign">
            <h3>User's Name Goes Here</h3>
            <p>User name goes here</p>
            <p>User city goes here</p>
        </div>
        <div className="rightAlign">
            <p>Last 6 months Trips</p>
            <p> bar Graph with last 6 month </p>
        </div>

        </>
    )
    }
}

export default Overview