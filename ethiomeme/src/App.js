import React, { useState } from 'react'
import HomeScreen from "./screens/HomeScreen.jsx"
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter as Router, Route} from "react-router-dom"
import "./App.css"
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop.jsx'
const App = () => {
    const [sideToggle, setSideToggle] = useState(false)
    return (
        <>
           <Router>
               <Navbar setToggle={setSideToggle} />
               <Backdrop click={() =>setSideToggle(false)} show={sideToggle} />
               <SideDrawer show={sideToggle} />
               <div style={{background:"#e7ebed"}}  className="app__body">
                    <Route exact path="/home"><HomeScreen /></Route>
                    <Route exact path="/counter"></Route>
               </div>
            </Router>
        </>
    )
}

export default App