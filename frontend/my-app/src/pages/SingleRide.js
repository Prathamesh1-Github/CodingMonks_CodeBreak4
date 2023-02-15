import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios"
import MainNavbar from "../components/MainNavbar"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import moment from "moment";
import ChatIcon from '@mui/icons-material/Chat';

import "../styles/singleride.css"

const SingleProduct = () => {
    const { id } = useParams()

    const [singleRide, setSingleRide] = useState({})
    const [isError, setIsError] = useState('')

    // second api call for single ride
    const getSingleRide = async (id) => {
        try {
            const res = await axios.get(
                `http://localhost:3000/api/v1/rides/${id}`,
                {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem('token')
                    }
                }
            )
            setSingleRide(res.data)
        } catch (error) {
            setIsError(error.message)
        }
    }

    useEffect(() => {
        getSingleRide(id)
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <MainNavbar/>
            {isError !== "" && <h2>{isError}</h2>}
            <div className="fullbodySingleRide">
                <div className="containerSingleRide">
                    <div className="titleDate">{moment(singleRide.date).utc().format('DD/MM/YYYY')}</div>
                    <div className="ride-details-singleride">
                        <div className="info-stack-1">
                            <div className="info-stack-sub">
                                <span className='singleride-details-placeholder'>Ride starts at</span>
                                <div className="singleride-details">{singleRide.time}</div>
                            </div>
                            <div className="info-stack-sub">
                                <span className='singleride-details-placeholder'>PickUp Location</span>
                                <div className="singleride-details">{singleRide.startLocation}</div>
                            </div>
                            <div className="info-stack-sub">
                                <span className='singleride-details-placeholder'>Destination</span>
                                <div className="singleride-details">{singleRide.destination}</div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="info-stack-2">
                            <span className='singleride-details-placeholder'>Total price for 1 passenger</span>
                            <div className="singleride-details">singleRide.price</div>
                        </div>
                        <hr></hr>
                        <div className="info-stack-3">
                            <div className="profile-details-singleride">
                                <div>{singleRide.createdBy}</div>
                                <AccountCircleIcon/>
                            </div>
                            <div className="extra-details-singleride">
                                <div className="chat-singleride"><ChatIcon className="chaticon"/>Chat with the Ride Buddy</div>
                                <hr></hr>
                                <div className="carname-singleride">{singleRide.car}</div>
                                <span className="carnumber-singleride">{singleRide.carNumber}</span>
                            </div>
                        </div>
                    </div>
                    <div className="book-button">
                        <div className="book-button-input">Book</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct