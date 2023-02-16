import React, { useState } from 'react'
import axios from 'axios'
import RideCard from "../components/RideCard"
import MainNavbar from "../components/MainNavbar"
import "../styles/searchpage.css"
import { Select } from '@mui/material'
// import LocationOnIcon from '@mui/icons-material/LocationOn';

import { FormControl, InputLabel, MenuItem } from '@mui/material';

function SearchPage() {
    const [startlocation, setstartlocation] = useState('')
    const [destination, setDestination] = useState('')

    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')
    // const [date, setDate] = useState('')
    const [rideData, setRideData] = useState({})

    function searchForPlayer(event) {
        event.preventDefault()
        var APICallString = `http://localhost:3000/api/v1/rides/all/userrides?startLocation=${startlocation}&destination=${destination}&sort=${price},${date}`
        axios.get(APICallString,
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('token')
                }
            }
        ).then(function (response) {
            setRideData(response.data)
        }).catch(function (error) {
            console.log(error)
        })
    }

    console.log(rideData)

    return (
        <div>
            <MainNavbar />
            <div className='searchSection'>
                <div className='searchbox'>
                    {/* <h5>startlocation</h5> */}
                    <input className='search-input1' type="text" onChange={e => setstartlocation(e.target.value)} placeholder="Leaving from..." />
                    {/* <h5>destination</h5> */}
                    <input className='search-input2' type="text" onChange={e => setDestination(e.target.value)} placeholder="Going to..." />
                    {/* <h5>date</h5> */}
                </div>
                <button className='search-button' onClick={e => searchForPlayer(e)}>Search</button>
            </div>
            <div className='searchSectionFilter'>
                    {/* <input className='search-input1' type="text" onChange={e => setPrice(e.target.value)} placeholder="price" /> */}
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Price</InputLabel>
                        <Select
                            className='search-input1'
                            label="Price Filter"
                            onChange={e => setPrice(e.target.value)}
                        >
                            <MenuItem value="price">Low To High</MenuItem>
                            <MenuItem value="-price">High To Low</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Date</InputLabel>
                        <Select
                            className='search-input1'
                            label="Price Filter"
                            onChange={e => setDate(e.target.value)}
                        >
                            <MenuItem value="date">Most Recent</MenuItem>
                            <MenuItem value="-date">Recent</MenuItem>
                        </Select>
                    </FormControl>
                <button className='search-button-filter' onClick={e => searchForPlayer(e)}>Apply</button>
                    {/* <input className='search-input2' type="text" onChange={e => setDate(e.target.value)} placeholder="date" /> */}
            </div>
            {JSON.stringify(rideData) !== '{}' ?
                <>
                    {rideData.map((ride) => {
                        const { startLocation, destination, date, time, car, carNumber, prefferedLoad, price, createdBy, createdByName, _id } = ride
                        return (
                            <RideCard
                                key={_id}
                                startLocation={startLocation}
                                destination={destination}
                                date={date}
                                time={time}
                                car={car}
                                carNumber={carNumber}
                                prefferedLoad={prefferedLoad}
                                price={price}
                                createdBy={createdBy}
                                createdByName={createdByName}
                                _id={_id}
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