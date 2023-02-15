import React, {useState} from 'react'
import axios from 'axios'
import RideCard from "../components/RideCard"
import MainNavbar from "../components/MainNavbar"
import "../styles/searchpage.css"
// import LocationOnIcon from '@mui/icons-material/LocationOn';

function SearchPage() {
    const [startlocation, setstartlocation] = useState('')
    const [destination, setDestination] = useState('')
    // const [date, setDate] = useState('')
    const [rideData, setRideData] = useState({})

    function searchForPlayer(event){
        event.preventDefault()
        var APICallString = `http://localhost:3000/api/v1/rides/all/userrides?startLocation=${startlocation}&destination=${destination}`
        axios.get(APICallString,
                {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem('token')
                    }
                }
            ).then(function(response){
            setRideData(response.data)
        }).catch(function(error){
            console.log(error)
        })
    }

    console.log(rideData)

    return(
        <div>
            <MainNavbar/>
            <div className='searchSection'>
                <div className='searchbox'>
                    {/* <h5>startlocation</h5> */}
                    <input className='search-input1'  type="text" onChange={e => setstartlocation(e.target.value)} placeholder="Leaving from..."/>
                    {/* <h5>destination</h5> */}
                    <input className='search-input2' type="text" onChange={e => setDestination(e.target.value)} placeholder="Going to..."/>
                    {/* <h5>date</h5>
                    <input type="date" onChange={e => setDate(e.target.value)}/> */}
                </div>
                <button className='search-button' onClick={e => searchForPlayer(e)}>Search</button>
            </div>
            {JSON.stringify(rideData) !== '{}' ? 
            <>
                {rideData.map((ride) => {
                    const {startLocation, destination, car, createdBy, _id} = ride
                    return(
                        <RideCard
                            key = {_id}
                            startLocation = {startLocation}
                            destination = {destination}
                            car = {car}
                            createdBy = {createdBy}
                            _id = {_id}
                        />
                    )
                })}
            </> 
            : 
            <>
                {/* We dont have player data */}
            </>
            }
        </div>
    )
}

export default SearchPage