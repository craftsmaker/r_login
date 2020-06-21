import React from "react";
import styles from "./styles.module.css";
import {Link} from "react-router-dom";

export default function(){
    return(
        <div className={styles.container}>
        <h1>Login</h1>
        <form className={styles.form}>

            <div className={styles.inputSelection}>
                <label htmlFor="loginID" className={styles.label}>Login ID</label>
                <input type="text" id="loginID" required className={styles.input}/>
            </div>

            <div className={styles.inputSelection}>
                <label htmlFor="password" className={styles.label}>E-mail</label>
                <input type="password" id="password" required className={styles.input}/>
            </div>

            <div className={styles.rowSelection}>
                <button type="submit" className={styles.button}>Sign up</button>
                <Link to="/Register" className={styles.link}>Don't have an account?</Link>
            </div>
        </form>
    </div>
    )
}