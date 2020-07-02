import React from "react";
import {GiAirBalloon} from "react-icons/gi";
import {FiFacebook,FiTwitter,FiInstagram} from "react-icons/fi";
import {AiOutlineMail} from "react-icons/ai";
import styles from "./styles.module.css";

export default function(){
    return (
        <div style={{display: "flex", flexDirection: "column", flex: 1,paddingLeft: "10vh",paddingBottom: "4vh",justifyContent: "flex-end"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <GiAirBalloon size={120}/>
                <div style={{paddingLeft: "50px",paddingRight: "100px"}}>
                    <h1 style={{fontSize: "55px"}}> Dont' have an account?</h1>
                    <p>Register to access the feature of our serice.</p>
                    <p>Manage your business in one place</p>
                    <div style={{display: "flex"}}>
                        <FiFacebook title="Facebook" className={styles.icon}/>
                        <FiTwitter title="Twitter" className={styles.icon}/>
                        <FiInstagram title="Instagram" className={styles.icon}/>
                        <AiOutlineMail title="Email" className={styles.icon}/>
                    </div>
                </div>
            </div>
        </div>
    )
}