import React from "react";
import { useState, useEffect } from "react"
import axios from "axios"
import MainNavbar from "../components/MainNavbar"

const ProfilePage = () => {
    const [profileInfo, setProfileInfo] = useState([])
    const [isError, setIsError] = useState('')

    const getProfileInfo = async () => {
        try {
            const res = await axios.get(
                "http://localhost:3000/api/v1/profile",
                {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem('token')
                    }
                }
            )
            console.log(res.data)
            setProfileInfo(res.data)
        }
        catch (error) {
            setIsError(error)
        }
    }

    console.log(isError)

    useEffect(() => {
        getProfileInfo()
    }, [])
    
    return (
        <div className="mainPage">
            <MainNavbar />
            {/* <h1>{profileInfo[0]}</h1> */}
            {
                profileInfo.map((curEle) => {
                    return (
                        <div>
                            <div className="container-fluid mycont">

                                <div className="row">
                                    <div className="col-lg-4 text-center custcard1">
                                        <img src="images/balnk_profile_img.webp" style="max-width: 10rem;max-height: 10rem;border-radius: 100%;"
                                            alt="profilepic">
                                    </div>
                                    <div className="col-lg-1">
                                        <p></p>
                                    </div>
                                    <div className="col-lg-7 align-self-center pdl2 custcard">
                                        <h2>Dhruv Kshirasagar</h2>
                                        <h5 className="ogloc"><i className="fa-solid fa-location-dot"></i><span className="myloc"> Pune, Maharashtra</span>
                                        </h5>
                                        <br>
                                            <p>Ratings : ⭐⭐⭐⭐⭐</p>
                                            <div className="row prowcol" >
                                                <div className="col-lg-6 ">
                                                    <p>Phone Number</p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <p>+91 8999080125</p>
                                                </div>
                                                <div className="col-lg-6 ">
                                                    <p>E-mail</p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <p>dhruv@gmail.com</p>
                                                </div>
                                                <div className="col-lg-6 ">
                                                    <p>Age</p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <p>21</p>
                                                </div>
                                            </div>
                                    </div>

                                </div>
                                <hr>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProfilePage
