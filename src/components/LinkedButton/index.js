import React from "react";
import styles from "./styles.module.css";
import {Link} from "react-router-dom";

export default ({children,to,...props}) => {
return <Link {...props} to={to} className={styles.link}>{children}</Link>
}