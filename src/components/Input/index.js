import React from "react";
import styles from "./styles.module.css";

export default function({ID,label,...props}){
    return(
        <div {...props} className={styles.inputSelection}>
            <label htmlFor={ID} className={styles.label}>{label}</label>
            <input type="text" id={ID} required className={styles.input}/>
        </div>
    )
}