import React from "react"

class Overview extends React.Component {
    render(){
        if(this.props.userData){
            const {firstName, lastName, userName } = this.props.userData
            return (
                <>
                    <div className="leftAlign">
            
                        <h3>{ firstName + " " +  lastName }</h3>
            
                        <p>{ userName }</p>
                    </div>
                    <div className="rightAlign">
                        <p>Last 6 months Trips</p>
                        <p>bar Graph with last 6 month </p>
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <p>Nothing Here</p>
                </>
            )
        }       
    }
}

export default Overview