import React, { useState } from 'react'
import "./Upload.css"
import FileBase from "react-file-base64"
const Upload = () => {
    const [imageUrl, setImageUrl] = useState("../../assets/images/picture.png")
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <>
        <div className="upload" style={{background:"#fefefd", margin:"5%", marginTop:"7%"}}>
            <form onSubmit={handleSubmit}>
                <h2 style={{color:"#111"}}>Upload meme</h2>
                <input className="form-control form-group" type="text" name="caption" id="caption" placeholder="caption(optional)" width="100%" style={{outline:"linear-gradient(to right, blue , purple)"}} />
                <div className="btn btn-primary btn-block"> <FileBase id="file__input" outline="none" type ="file" multiple = {false} onDone = {({base64}) => setImageUrl(base64)}/></div>
                <img id="meme"  src={imageUrl} alt="meme" width="95%" className="m-2" />
                <button type="submit" style={/*{background:"linear-gradient(to right, blue , purple)" }*/{display:"block"}} className="btn btn-block m-2 btn-outline-danger" width="100vw">Post</button>
                
            </form>
        </div>  
        </>
    )
}

export default Upload