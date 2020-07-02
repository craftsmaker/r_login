import React from "react";
import styles from "./styles.module.css";
import {IoIosArrowForward} from "react-icons/io"

export default ({children,...props}) => {
    return (
        <div {...props} style={{display: "flex"}}>
            <button  type="submit" className={styles.button}>{children}</button>
            <IoIosArrowForward size={20}/>
        </div>
    )
}