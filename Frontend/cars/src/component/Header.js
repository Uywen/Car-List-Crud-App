import React from 'react'
import "./Header.css"
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


const Header = () => {
    const [activeTab, setActiveTab] = useState('Home')

    // navigates to different webpages
    const Location = useLocation()

    // the effect will be placed on the following
    useEffect(() => {
        if(Location.pathname === '/'){
            setActiveTab('Home')
        }else if(Location.pathname === '/add'){
            setActiveTab('AddCar')
        }
    }, [Location])
  return (
    // added a hover effect on the header component 
    // also added a effect when a link of a webpage is active on the webpage
    <div className='header'>
        <p className='logo'>Car list</p>
        <div className='header-right'>
        <Link to="/">
            <p className={`${activeTab === "Home" ? "active" : ""}`} onClick={() => setActiveTab('Home')}>Home</p>
        </Link>
        <Link to="/add">
            <p className={`${activeTab === "AddCar" ? "active" : ""}`}onClick={() => setActiveTab('Addcar')}>Addcar</p>
        </Link>
        </div>
    </div>
  )
}

export default Header