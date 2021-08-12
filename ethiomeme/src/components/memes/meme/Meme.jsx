import React from 'react'
import  Avatar  from "@material-ui/core/Avatar";
import LikeIcn from "@material-ui/icons/ThumbUpOutlined"
import LikeIcnActive from "@material-ui/icons/ThumbUp"
import DislikeIcn from "@material-ui/icons/ThumbDownOutlined"
import DislikeIcnActive from "@material-ui/icons/ThumbDown"
import {useState} from "react"
import "./Meme.css"
const Meme = () => {
    const [like, setLike] = useState(false);
    const [LikeCount, setLikeCount] = useState(0)
   
   const handleLikeClick = () =>{
    setLike(!like);
    setLikeCount(LikeCount + 1)

    console.log(LikeCount)
   }
   
    return (
        <>
            <div style={{background:"#fefefd", color:"#111", border:"0.5px solid white"}} className="meme card m-2">
                <div className="card-body"><h5  style={{display:"flex"}}><Avatar src="../../assets/images/me.jpg"/><span className="card__username" style={{marginLeft:"1rem"}}> <b>Confused Coder</b> <small style={{color:'gray', marginLeft:"10px"}}>@henaCGI <br/> 20mins ago</small></span></h5></div>
                <p style={{padding:"3%"}}>Lorem ipsum dolor sit amet consectetur .</p>
                <img src="../../assets/images/meme.png" className="card-img-top w-100" alt="meme_temp"/>
                <div className="card-body card__bottom" style={{margin:"2%"}}>
                    <button onClick={handleLikeClick} type="button" className={like ? "btn mr-md-3 mb-2 mb-md-0 btn-round btn-danger" : "btn mr-md-3 mb-2 mb-md-0 btn-round btn-outline-danger"}><i className="ion-ios-heart mr-1"></i> {LikeCount}</button>
                    <button type="button" className="btn btn-primary btn-round mr-md-3 mb-md-0 mb-2">Share</button>
                </div>
           </div>
        </>
    )
}

export default Meme

function getLikeClasses(like) {
    let likeClasses = "btn mr-md-3 mb-2 mb-md-0 btn-round";
    likeClasses += like == true ? "btn-danger" : "btn-outline-danger";
    return likeClasses;
}
