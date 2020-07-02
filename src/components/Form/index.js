import React from "react";
import styles from "./styles.module.css";

export default function({title,children}){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <form className={styles.form}>
                {children}
            </form>
        </div>
    )
}