import React from "react";
import Navbar from "../components/Navbar"

import "../styles/HomePage.css"
import FirstImage from "../images/truckhome.webp"
import FeaturesImage1 from "../images/truckbigf1.webp"
import FeaturesImage2 from "../images/hometruck2.jpg"
import FeaturesImage3 from "../images/FeaturesImage3.png"
import { NavLink } from "react-router-dom"

import Fade from "react-reveal/Fade"



const HomePage = () => {
    return (
        <div className="body_Homepage">
            {/* <div className="top-banner">
                    <div className="container">
                        <div className="small-bold-text banner-text">New to Ride Sharing: Share and Save Money using Ride</div>
                    </div>
                </div> */}
            <Navbar className="HomepageNavbar" />
            <Fade bottom distance="10%" duration={1500}>
                <header>
                    <div className="container">
                        <div className="container header-section flex">
                            <div className="header-left">
                                <h1>Share the Road and the Load ! One Truck Pool at a Time.</h1>
                                <p>Optimize your logistics and reduce your carbon footprint with GreenFleet. Share a truck, cut
                                    costs, and Manage your Items. Join now and revolutionize your shipping!</p>
                                <NavLink to="/register" className="primary-button-homepage">Get Started</NavLink>
                            </div>
                            <div className="header-right">
                                <img src={FirstImage} alt="heroimage"></img>
                            </div>
                        </div>
                    </div>
                </header>
            </Fade>
            <section className="features-section">
                <div className="container">
                    <div className="features-header">
                        <h2>Increase Efficiency and Reduce Costs with GreenFleet</h2>
                        {/* <NavLink className="secondary-button2" to="/features">See all features</NavLink> */}
                    </div>
                    <div className="features-area flex">
                        <Fade bottom distance="10%" duration={1500}>
                            <div className="features-card flex">
                                <h3>Collaborative platform</h3>
                                <p>Our platform is designed to meet the evolving needs of the market and corporate world,
                                    providing a comprehensive solution.</p>
                            </div>
                            <div className="features-card flex">
                                <h3>Smart Trucking</h3>
                                <p>Our system matches your shipment with top transporters based on performance, availability,
                                    and cost.</p>
                            </div>
                            <div className="features-card flex">
                                <h3>Instant Capacity</h3>
                                <p>We deliver value via our efficient load and route planning alerts to make informed decisions
                                </p>
                            </div>
                            <div className="features-card flex">
                                <h3>One stop for success</h3>
                                <p>Our platform provides transparency in pricing and scheduling, giving you complete information
                                    about the cost, date, and timing of your delivery before you book it.</p>
                            </div>
                            <div className="features-card flex">
                                <h3>Freight At Full Speed</h3>
                                <p>Our platform ensures timely deliveries by our drivers who use the fastest routes, providing
                                    an efficient and reliable shipping solution.</p>
                            </div>
                            <div className="features-card flex">
                                <h3>Safe deleivery </h3>
                                <p>You can have peace of mind knowing that your product will be delivered securely on the date
                                    and time you specify</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
            <Fade bottom distance="10%" duration={1500}>
                <section className="big-features-section">
                    <div className="container flex big-feature-container">
                        <div className="feature-image">
                            <img src={FeaturesImage1} alt=""></img>
                        </div>
                        <div class="features-desc flex">
                            <h3>Cut Costs, Share a Truck, Save with TruckPooling</h3>
                            <p>Save big on shipping costs with our truckpooling solution. By sharing a truck, you split costs
                                and reduce emissions. Real-time tracking and communication keep you informed every step of the
                                way. Join the eco-friendly shipping movement and start saving today!</p>
                        </div>
                    </div>
                </section>
            </Fade>
            <Fade bottom distance="10%" duration={1500}>
                <section className="big-features-section">
                    <div className="container flex big-feature-container">
                        <div className="features-desc flex">
                            {/* <h4>Hello World</h4> */}
                            <h3>Your safety is our priority</h3>
                            <p>At Ride, we're working hard to make our platform as secure as it can be. But when scams do happen, we want you to know exactly how to avoid and report them. Follow our tips to help us keep you safe.</p>
                        </div>
                        <div className="feature-image extraclass">
                            <img src={FeaturesImage2} alt=""></img>
                        </div>
                    </div>
                </section>
            </Fade>
            <section className="cta-section flex">
                <Fade bottom distance="10%" duration={1500}>
                    <div className="container cta-section-image">
                        <img src={FeaturesImage3} alt=""></img>
                    </div>
                    <div className="container flex cta-section-container">
                        <h2>Delivering something soon?</h2>
                        <p>Let's make this your most efficient trip ever.</p>
                        <NavLink href="/register" className="primary-button-homepage">Offer a Service</NavLink>
                    </div>
                </Fade>
            </section>
        </div>
    )
}

export default HomePage