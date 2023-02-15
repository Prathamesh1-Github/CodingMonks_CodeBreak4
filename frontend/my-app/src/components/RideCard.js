import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import SouthIcon from '@mui/icons-material/South';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {NavLink} from "react-router-dom";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import "../styles/rideCard.css"


export default function RideCard(props){
    return(
        <div className="ridesList">
            {/* <h1>All Rides</h1>

            <div>
                {myData.map((ride) => {
                    const {startLocation, destination, car, createdBy, _id} = ride
                    return(
                        <NavLink to={`/singleride/${_id}`} key={_id}>
                            <div>
                                <h1>{_id}</h1>
                                <h1>{createdBy}</h1>
                                <h1>{startLocation}</h1>
                                <h1>{destination}</h1>
                                <p>{car}</p>
                                <hr></hr>
                            </div>
                        </NavLink>
                    )
                })}
            </div> */}
            <NavLink to={`/singleride/${props._id}`} style={{ textDecoration: 'none' }}  key={props._id} className='rideCard'>
                <div className="displayStack_1">
                    <h3 className="departureTime">20:00</h3>
                    <div className="startLocationIcon">
                        <LocationOnIcon/>
                    </div>
                    <h2 className="startLocation">{props.startLocation}</h2>
                    <h2 className="ridePrice">$50.00</h2>
                </div>
                <div className="displayStack_2">
                    <div className="verticalLine">
                        <MoreVertIcon className="southIcon"/>
                        {/* <MoreVertIcon/> */}
                    </div>
                </div>
                <div className="displayStack_3">
                    <div className="endLocationIcon">
                        <LocationOnIcon/>
                    </div>
                    <h2 className="destination">{props.destination}</h2>
                </div>
                <div className="displayStack_4">
                    <Person2OutlinedIcon className="person2OutlinedIcon"/>
                    <h5 className="createdBy">{props.createdBy}</h5>
                    <h4 className="carName">{props.car}</h4>
                </div>
            </NavLink>
        </div>
    )
}

