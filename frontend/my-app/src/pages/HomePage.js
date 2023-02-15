import React from "react";
import Navbar from "../components/Navbar"

import "../styles/HomePage.css"
// import FirstImage from "../images/carpollingimage1.webp"
// import FeaturesImage1 from "../images/homepage2.jpg"
// import FeaturesImage2 from "../images/registrationimageBgrm.png"
// import FeaturesImage3 from "../images/asset3.svg"
// import {NavLink} from "react-router-dom"

// import Fade from "react-reveal/Fade"



const HomePage = () => {
    return (
        <div className="body_Homepage">
                {/* <div className="top-banner">
                    <div className="container">
                        <div className="small-bold-text banner-text">New to Ride Sharing: Share and Save Money using Ride</div>
                    </div>
                </div> */}
                <Navbar className="HomepageNavbar"/>
                {/* <Fade bottom distance="10%" duration={1500}> */}
        </div>
    )
}

export default HomePage