import React from "react";
import styles from "./container.module.css";

const Container = ({children,style}) => {
    return(
        <div className={styles.container} style={style}>
            {children}
        </div>
    )
}

export default Container;