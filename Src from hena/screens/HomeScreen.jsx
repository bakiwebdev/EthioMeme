import React from 'react'
import "./HomeScreen.css"
import Upload from "../components/Upload/Upload"
import Memes from "../components/memes/Memes"
import Profile from "../components/profile/Profile"
const HomeScreen = () => {
    return (
        <>
            <div className="home__screen">
                <div className="home__upload"><Upload /></div>
               <div className="home__memes"> <Memes /></div>
               <div className="home__profile"><Profile /></div>
            </div>
        </>
    )
}

export default HomeScreen