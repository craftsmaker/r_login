import React from "react";
import {GiAirBalloon} from "react-icons/gi";
import {FiFacebook,FiTwitter,FiInstagram} from "react-icons/fi";
import {AiOutlineMail} from "react-icons/ai";


export default function(){
    return (
        <div style={{display: "flex", flexDirection: "column", flex: 2,paddingLeft: "10vh",paddingBottom: "10vh",justifyContent: "flex-end"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <GiAirBalloon size={120}/>
                <h1> Dont' have an account?</h1>
                <p>Register to access the feature of our serice.</p>
                <p>Manage your business in one place</p>
                <div style={{dispaly: "flex"}}>
                    <FiFacebook size={20}/>
                    <FiTwitter size={20}/>
                    <FiInstagram size={20}/>
                    <AiOutlineMail size={20}/>
                </div>
            </div>
        </div>
    )
}