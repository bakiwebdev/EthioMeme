import React from 'react'
import "./SideDrawer.css"
import {Link} from "react-router-dom"
import IconBtn from "@material-ui/core/IconButton"
import Avatar from "@material-ui/core/Avatar"
const SideDrawer = ({show}) => {
    const drawerClasses = ["sidedrawer"]
    if (show){
        drawerClasses.push("show")
    }
    console.log(drawerClasses.join(' '))
    return (
       <div className={drawerClasses.join(' ')}>
        <ul className="nav nav-ul">
            <p>ohjnkm,</p>
                    <Link to="home"><IconBtn><li className="linkss nav-link"><i><img src="http://localhost:3000/assets/icons/home.png" alt="uijlk" width="35px" height="35px"/></i></li></IconBtn></Link>
                    <Link to="generator"><IconBtn><li className="linkss nav-link"><i><img src="http://localhost:3000/assets/icons/add.png" alt="uijlk" width="35px" height="35px"/></i></li></IconBtn></Link>
                    <Link to="about"><IconBtn><li className="linkss nav-link"><i><img src="http://localhost:3000/assets/icons/about.png" alt="uijlk" width="35px" height="35px"/></i></li></IconBtn></Link>
                    <Link to="profile"><div className="avatar"> <Avatar src="http://localhost:3000/assets/images/me.jpg" /> </div> </Link>
                </ul>
       </div>
       
    )
}

export default SideDrawer


