import React from "react";
import { useState, useEffect } from "react"
import axios from "axios"
import MainNavbar from "../components/MainNavbar"

const ProfilePage = () => {
    const [profileInfo, setProfileInfo] = useState([])
    const [isError, setIsError] = useState('')

    const getProfileInfo = async () => {
        try{
            const res = await axios.get(
                "http://localhost:3000/api/v1/profile",
                {
                    headers:{
                        "Authorization": "Bearer " + localStorage.getItem('token')
                    }
                }
            )
            console.log(res.data)
            setProfileInfo(res.data)
        }
        catch(error){
            setIsError(error)
        }
    }

    console.log(isError)

    useEffect(() => {
        getProfileInfo()
    }, [])

    return (
        <div className="mainPage">
            <MainNavbar/>
            {/* <h1>{profileInfo[0]}</h1> */}
            {
                profileInfo.map((curEle) => {
                    return <h1>Name: {curEle.name} Age: {curEle.age} MobileNo : {curEle.mobileNo}</h1>
                })
            }
        </div>
    )
}

export default ProfilePage
