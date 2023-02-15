import {useState} from 'react'
import loginImage from '../images/loginimage.jpg'

import "../styles/login.css"

import Navbar from "../components/Navbar"
import {NavLink} from "react-router-dom"


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:3000/api/v1/auth/login', {
            method: 'POST',
            withCredentials: true,
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json()

        if(data.user){
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', data.user)
            // alert('Login successful')
            window.location.href = '/dashboard'
        }
        else{
            alert('Please check your username and password')
        }
    }

    // return(
    //     <div>
    //         <h1>Login</h1>
    //         <form onSubmit={loginUser}>
	// 			<input
	// 				value={email}
	// 				onChange={(e) => setEmail(e.target.value)}
	// 				type="email"
	// 				placeholder="Email"
	// 			/>
	// 			<br />
	// 			<input
	// 				value={password}
	// 				onChange={(e) => setPassword(e.target.value)}
	// 				type="password"
	// 				placeholder="Password"
	// 			/>
	// 			<br />
	// 			<input type="submit" value="Login" />
	// 		</form>
    //     </div>
    // )

    return(
        <div className='body'>
            <Navbar/>
            <section className="Form my-3 mx-5">
            <div className="container">
                <div className="row no-gutters">
                    <div id='img-row-login' className="img-rowlogin col-lg-5">
                        <img src={loginImage} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-7 px-5 pt-5">
                        <h1 className="font-weight-bold py-3">Ride</h1>
                        <h4>Sign in to your account</h4>
                        <form onSubmit={loginUser}>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input 
                                        className="form-control my-3 p-3"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        placeholder="Email-Address"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input
                                        className="form-control my-3 p-3"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <button type="submit" value="Login" className="btn1 mt-3 mb-5">Login</button>
                                </div>
                            </div>
                            <p>Dont't have an account? <NavLink to="/register" className="registernowa">Register here</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Login