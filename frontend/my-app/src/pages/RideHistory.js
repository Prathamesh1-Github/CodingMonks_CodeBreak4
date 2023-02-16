import React from "react";
import { useState, useEffect } from "react"
import axios from "axios"
import MainNavbar from "../components/MainNavbar2"
import RideCard from "../components/RideCard"


const ProfilePage = () => {
    const [rideInfo, setrideInfo] = useState([])
    const [isError, setIsError] = useState('')

    const getrideInfo = async () => {
        try{
            const res = await axios.get(
                "http://localhost:3000/api/v1/rides",
                {
                    headers:{
                        "Authorization": "Bearer " + localStorage.getItem('token')
                    }
                }
            )
            console.log(res.data.rides)
            setrideInfo(res.data.rides)
        }
        catch(error){
            setIsError(error)
        }
    }

    console.log(isError)

    useEffect(() => {
        getrideInfo()
    }, [])

    return (
        <div className="mainPage">
            <MainNavbar/>
            {/* <h1>{profileInfo[0]}</h1> */}
            {/* <h2>Drive History</h2> */}
            <h2 className="historyHeader">Drive History</h2>
            {rideInfo.map((ride) => {
                    const {startLocation, destination, date, time, car, carNumber, prefferedLoad, price, createdBy, createdByName, _id} = ride
                    return(
                        <RideCard
                            key = {_id}
                            startLocation = {startLocation}
                            destination = {destination}
                            date = {date}
                            time = {time}
                            car = {car}
                            carNumber = {carNumber}
                            prefferedLoad = {prefferedLoad}
                            price = {price}
                            createdBy = {createdBy}
                            createdByName = {createdByName}
                            _id = {_id}
                        />
                    )
                })}
        </div>
    )
}

export default ProfilePage
