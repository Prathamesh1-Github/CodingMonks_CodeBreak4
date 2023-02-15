import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"


import registrationImage from '../images/registrationimagedhruv.jpg'

import Navbar from "../components/Navbar"

import "../styles/register.css"
import {NavLink} from "react-router-dom"


function Register() {
    const navigate = useNavigate()

	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
		mobileNo: "",
		age: "",
		country: "",
		city: ""
	})


	const [error, setError] = useState("");

	const handleChange = ({currentTarget: input}) => {
		setData({...data, [input.name]: input.value})
	}

    async function registerUser(event) {
        event.preventDefault()

		try{
			const url = "http://localhost:3000/api/v1/auth/register"
			const {data: res} = await axios.post(url, data)
			navigate("/login")
			console.log(res.message)
		}
		catch(error){
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
    }

	console.log(error)

    // return(
    //     <div>
	// 		<h1>Register</h1>
	// 		<form onSubmit={registerUser}>
	// 			<input
	// 				type="text"
	// 				placeholder="Name"
	// 				name="name"
	// 				onChange={handleChange}
	// 				value={data.name}
	// 				required
	// 			/>
	// 			<br />
	// 			<input
	// 				type="text"
	// 				placeholder="Email"
	// 				name="email"
	// 				onChange={handleChange}
	// 				value={data.email}
	// 				required
	// 			/>
	// 			<br />
	// 			<input
	// 				type="text"
	// 				placeholder="Password"
	// 				name="password"
	// 				onChange={handleChange}
	// 				value={data.password}
	// 				required
	// 			/>
	// 			<br />
    //             <input
	// 				type="text"
	// 				placeholder="Sex"
	// 				name="sex"
	// 				onChange={handleChange}
	// 				value={data.sex}
	// 				required
	// 			/>
	// 			<br />
    //             <input
	// 				type="text"
	// 				placeholder="Age"
	// 				name="age"
	// 				onChange={handleChange}
	// 				value={data.age}
	// 				required
	// 			/>
	// 			<br />
    //             <input
	// 				type="text"
	// 				placeholder="Country"
	// 				name="country"
	// 				onChange={handleChange}
	// 				value={data.country}
	// 				required
	// 			/>
	// 			<br />
    //             <input
	// 				type="text"
	// 				placeholder="City"
	// 				name="city"
	// 				onChange={handleChange}
	// 				value={data.city}
	// 				required
	// 			/>
	// 			<br />
	// 			<input type="submit" value="Register" />
	// 		</form>
	// 	</div>
    // )

	return(
		<div className='body'>
			<Navbar/>
            <section className="Form my-3 mx-5">
            <div className="container">
                <div className="row no-gutters">
                    <div className="img-rowregister col-lg-5">
                        <img src={registrationImage} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-7 px-5 pt-5">
                        {/* <h1 className="font-weight-bold py-3">Logo</h1> */}
                        <h2>Sign Up</h2>
                        <form onSubmit={registerUser}>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input 
                                        className="form-control my-3 p-2"
                                        type="text"
										placeholder="Name"
										name="name"
										onChange={handleChange}
										value={data.name}
										required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input
                                        className="form-control my-3 p-2"
                                        type="text"
										placeholder="Email"
										name="email"
										onChange={handleChange}
										value={data.email}
										required
                                    />
                                </div>
                            </div>
							<div className="form-row">
                                <div className="col-lg-7">
                                    <input
                                        className="form-control my-3 p-2"
                                        type="password"
										placeholder="Password"
										name="password"
										onChange={handleChange}
										value={data.password}
										required
                                    />
                                </div>
                            </div>
							{/* <div className="form-row">
                                <div className="col-lg-7">
                                    <input
                                        className="form-control my-3 p-2"
                                        type="text"
										placeholder="Gender"
										name="sex"
										onChange={handleChange}
										value={data.sex}
										required
                                    />
                                </div>
                            </div> */}
							<div className="form-row">
                                <div className="col-lg-7">
                                    <input
                                        className="form-control my-3 p-2"
                                        type="number"
										placeholder="Age"
										name="age"
										onChange={handleChange}
										value={data.age}
										required
                                    />
                                </div>
                            </div>
							<div className="form-row">
                                <div className="col-lg-7">
                                    <input
                                        className="form-control my-3 p-2"
                                        type="text"
										placeholder="Mobile Number"
										name="mobileNo"
										onChange={handleChange}
										value={data.mobileNo}
										required
                                    />
                                </div>
                            </div>
							<div className="form-row">
                                <div className="col-lg-7">
                                    <input
                                        className="form-control my-3 p-2"
                                        type="text"
										placeholder="Country"
										name="country"
										onChange={handleChange}
										value={data.country}
										required
                                    />
                                </div>
                            </div>
							<div className="form-row">
                                <div className="col-lg-7">
                                    <input
                                        className="form-control my-3 p-2"
                                        type="text"
										placeholder="City"
										name="city"
										onChange={handleChange}
										value={data.city}
										required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <button type="submit" value="Register" className="btn1 mt-3 mb-5">Register</button>
                                </div>
                            </div>
                            <p>Already have an account? <NavLink to="/login" className="registernowa">Sign In</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>
	)
}

export default Register