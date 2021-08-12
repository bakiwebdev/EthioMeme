import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import IconBtn from "@material-ui/core/IconButton"
import MoodIcn from "@material-ui/icons/Mood"
import Avatar from "@material-ui/core/Avatar"
import MenuIcn from "@material-ui/icons/Menu"

const Navbar = ({setToggle}) => {
   
    return (
        <>
            <nav className="navbar navbar-bright" style={{position:"fixed", width:"100%", zIndex:3, background:"#fefefd"}}>
                <h3 className="navbar-brand"><b className="am__brand">ኢትዮ-ሚም</b><MoodIcn /></h3>
               
                <ul className="nav nav-ul">
                    <Link to="home"><IconBtn><li className="linkss nav-link"><i><img src="../../assets/icons/home.png" alt="uijlk" width="35px" height="35px"/></i></li></IconBtn></Link>
                    <Link to="generator"><IconBtn><li className="linkss nav-link"><i><img src="../../assets/icons/add.png" alt="uijlk" width="35px" height="35px"/></i></li></IconBtn></Link>
                    <Link to="about"><IconBtn><li className="linkss nav-link"><i><img src="../../assets/icons/about.png" alt="uijlk" width="35px" height="35px"/></i></li></IconBtn></Link>
                    <Link to="profile"><div className="avatar"> <Avatar src="../../assets/images/me.jpg" /> </div> </Link>
                </ul>
                <div className="humberger" onClick={() => setToggle(true)}>
                    <MenuIcn />
                </div>
            </nav>
        </>
    )
}

export default Navbar