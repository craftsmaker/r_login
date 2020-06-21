import React from "react";
import styles from "./styles.module.css";
import {Link} from "react-router-dom";

export default function(){
    return (
        <div className={styles.container}>
            <h1>Sign up</h1>
            <form className={styles.form}>
                <div className={styles.inputSelection}>
                    <label htmlFor="email"  className={styles.label}>E-mail</label>
                    <input type="email" id="email" required className={styles.input}/>
                </div>

                <div className={styles.inputSelection}>
                    <label htmlFor="loginID" className={styles.label}>Login ID</label>
                    <input type="text" id="loginID" required className={styles.input}/>
                </div>

                <div className={styles.inputSelection}>
                    <label htmlFor="password"  className={styles.label}>E-mail</label>
                    <input type="password" id="password" required className={styles.input}/>
                </div>

                <div className={styles.rowSelection}>
                    <input type="checkbox" id="termsOfUse"  className={styles.label}/>
                    <label htmlFor="termsOfUse" className={styles.termsOfUse}>I agree to the terms statement in <Link to="/TermsOfServices" className={styles.termsOfServiceLink}>Terms of services</Link></label>
                </div>

                <div className={styles.buttons}>
                    <button type="submit" className={styles.button}>Sign up</button>
                    <Link to="/Login" className={styles.link}>Have an account?</Link>
                </div>
            </form>
        </div>
    )
}