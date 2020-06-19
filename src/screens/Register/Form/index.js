import React from "react";
import styles from "./styles.module.css";
import {Link} from "react-router-dom";

export default function(){
    return (
        <div className={styles.container}>
            <h1>Sign up</h1>
            <form className={styles.form}>
                <div className={styles.inputSelection}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" required className={styles.input}/>
                </div>

                <div className={styles.inputSelection}>
                    <label htmlFor="loginID">Login ID</label>
                    <input type="text" id="loginID" required className={styles.input}/>
                </div>

                <div className={styles.inputSelection}>
                    <label htmlFor="password">E-mail</label>
                    <input type="password" id="password" required className={styles.input}/>
                </div>

                <div className={styles.rowSelection}>
                    <input type="checkbox" id="termsOfUse"/>
                    <label htmlFor="termsOfUse">I agree to the terms statement in Terms of services</label>
                </div>

                <div className={styles.rowSelection}>
                    <button type="submit" className={styles.button}>Sign up</button>
                    <Link to="/Login" className={styles.link}>Have an account?</Link>
                </div>
            </form>
        </div>
    )
}