import React from "react"

class Stats extends React.Component {
    render (){
        if(this.props.theTrips){
            return (
            <>
             <p>Fish Caught: {this.props.theTrips.map(trip=> +trip.catches).reduce((a,b)=> a+b)} </p>
             <p>Total trips: {this.props.theTrips.length} </p> 
            </>
        ) 
    }else{
    return (
        null
    )
    }
}
}

export default Stats