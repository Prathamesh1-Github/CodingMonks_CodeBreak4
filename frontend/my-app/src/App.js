import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import SingleRide from './pages/SingleRide'
import CreateRide from './pages/CreateRide'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import ProfilePage from './pages/ProfilePage'
import ProfilePageById from './pages/ProfilePageById'
import RideHistoryPage from './pages/RideHistory'

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<HomePage/>}></Route>
                    <Route path='/login' exact element={<Login/>}></Route>
                    <Route path='/register' exact element={<Register/>}></Route>
                    <Route path='/dashboard' exact element={<Dashboard/>}></Route>
                    <Route path='/singleride/:id' exact element={<SingleRide/>}></Route>
                    <Route path='/createride' exact element={<CreateRide/>}></Route>
                    <Route path='/search' exact element={<SearchPage/>}></Route>
                    <Route path='/profile' exact element={<ProfilePage/>}></Route>
                    <Route path='/profile/:id' exact element={<ProfilePageById/>}></Route>
                    <Route path='/rides' exact element={<RideHistoryPage/>}></Route>
                </Routes>
            </BrowserRouter>
            {/* <Login /> */}
        </div>
    )
}

export default App

