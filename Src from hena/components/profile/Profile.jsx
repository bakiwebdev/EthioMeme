import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import "./profile.css"
import LocationIcn from "@material-ui/icons/LocationOn"
import WorkIcn from "@material-ui/icons/Work"
const Profile = () => {
    return (
        <>
            <div className="card profile__card">
                <img src="../../assets/images/wellcome.png" className="card-img-top w-100" alt="cover" srcset=""/>
                <div className="profile__top">
                    <div className="profile__pic"><Avatar className="profile__avatar" src="../../assets/images/me.jpg" width="30%"/></div>
                    <div className="user__info">
                        <b>Confused Coder</b>
                        <small className="profile__username">@HenaCGI</small>
                    </div>
                </div>

                <div className="profile_info_table">
                    <div>
                            <h6 style={{color:"gray"}}>posts</h6>
                            <h3 style={{color:"#ae2cfe"}}> <b>879</b> </h3>
                    </div>
                    <div>
                            <h6 style={{color:"gray"}}>Likes</h6>
                            <h3 style={{color:"#ae2cfe"}}> <b>8965</b> </h3>
                    </div>
                    <div>
                            <h6 style={{color:"gray"}}>followers</h6>
                            <h3 style={{color:"#ae2cfe"}}> <b>2908</b> </h3>

                    </div>
                </div>
                <hr style={{border:"1px solid black"}}/>
                <div className="profile__details" style={{color:'gray'}}>
                   <p> <LocationIcn /> Lives in <b>Ethiopia</b> </p>
                   <p> <WorkIcn /> Works at Ethio-Developers</p>
                </div>
            </div>
        </>
    )
}

export default Profile