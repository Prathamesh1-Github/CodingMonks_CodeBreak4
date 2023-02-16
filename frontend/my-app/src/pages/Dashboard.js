import React from "react"
import {useState, useEffect} from "react"
import axios from "axios"
import RideCard from "../components/RideCard"
import MainNavbar from "../components/MainNavbar"

import "../styles/rideCard.css"

const Dashboard = () => {
    const [myData, setMyData] = useState([])
    const [isError, setIsError] = useState('')

    // const [singleRide, setSingleRide] = useState({})

    const getMyData = async () => {
        try {
            const res = await axios.get(
                'http://localhost:3000/api/v1/rides/all/userrides',
                {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem('token')
                    }
                }
            )
            // console.log(res)
            const rides = res.data
            console.log(rides)
            setMyData(res.data)
        } catch (error) {
            setIsError(error.message)
        }
    }
    
    // second api call for single ride
    // const getSingleRide = async () => {
    //     try {
    //         const res = await axios.get(
    //             '',
    //             {
    //                 headers: {
    //                     "Authorization": "Bearer " + localStorage.getItem('token')
    //                 }
    //             }
    //         )
    //         setSingleRide(res.data)
    //     } catch (error) {
    //         setIsError(error.message)
    //     }
    // }

    useEffect(() => {
        getMyData()
    }, [])

    return(
        <div>
            {/* <h1>All Rides</h1> */}
            {isError !== "" && <h2>{isError}</h2>}
            {/* <hr/> */}
            <MainNavbar/>
            <div className="'dashboard">
            <h2 className="dashboardHeader">WelCome! Here Are All The Drivers Available</h2>
                {myData.map((ride) => {
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
        </div>
    )
}

export default Dashboard;
