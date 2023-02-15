import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import "../styles/createride.css"
import MainNavbar from "../components/MainNavbar2"

function CreateRide() {
    const navigate = useNavigate()

	const [data, setData] = useState({
		startLocation: "",
		destination: "",
		date: "",
		time: "",
		car: "",
		carNumber: "",
		prefferedLoad: "",
		price: ""
	})


	const [error, setError] = useState("");

	const handleChange = ({currentTarget: input}) => {
		setData({...data, [input.name]: input.value})
	}

    async function createRide(event) {
        event.preventDefault()

		try{
			const url = "http://localhost:3000/api/v1/rides"
			const {data: res} = await axios.post(url, data, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('token')
                }
            })
			navigate("/dashboard")
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

        if(error){
            console.log(error)
        }
    }

    return(
		<div>
		<MainNavbar/>
		<div className='fullBody'>
        <div className='containerCreateRide'>
			<div className='title'>Create New Ride</div>
			<form onSubmit={createRide}>
				<div className='ride-details-createride'>
					<div className='input-box-createride'>
						<span className='details'>Pick Up</span>
						<input
							type="text"
							placeholder="Pick Up Location"
							name="startLocation"
							onChange={handleChange}
							value={data.startLocation}
							required
						/>
					</div>
					<div className='input-box-createride'>
						<span className='details'>Destination</span>
						<input
							type="text"
							placeholder="Drop Location"
							name="destination"
							onChange={handleChange}
							value={data.destination}
							required
						/>
					</div>
					<div className='input-box-createride'>
						<span className='details'>Date</span>
						<input
							type="date"
							placeholder="Date"
							name="date"
							onChange={handleChange}
							value={data.date}
							required
						/>
					</div>
					<div className='input-box-createride'>
						<span className='details'>Time</span>
						<input
							type="time"
							placeholder="Time of Pick-Up"
							name="time"
							onChange={handleChange}
							value={data.time}
							required
						/>
					</div>
					<div className='input-box-createride'>
						<span className='details'>Truck</span>
						<input
							type="text"
							placeholder="Which Car?"
							name="car"
							onChange={handleChange}
							value={data.car}
							required
						/>
					</div>
					<div className='input-box-createride'>
						<span className='details'>Truck Number</span>
						<input
							type="text"
							placeholder="Car Number"
							name="carNumber"
							onChange={handleChange}
							value={data.carNumber}
							required
						/>
					</div>
					<div className='input-box-createride'>
						<span className='details'>Preffered Load</span>
						<input
							type="text"
							placeholder="Preffered Load"
							name="prefferedLoad"
							onChange={handleChange}
							value={data.prefferedLoad}
							required
						/>
					</div>
					<div className='input-box-createride'>
						<span className='details'>Price</span>
						<input
							type="text"
							placeholder="Price"
							name="price"
							onChange={handleChange}
							value={data.price}
							required
						/>
					</div>
				</div>
				<div className='createButton'>
					<input type="submit" value="Create Ride" />
				</div>
			</form>
		</div>
		</div>
		</div>
    )
}

export default CreateRide
