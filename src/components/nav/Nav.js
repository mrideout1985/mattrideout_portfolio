import React from "react";
import styles from './Nav.module.scss';

const Nav = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["name"]}>Matthew Rideout</div>
            <div className={styles["menu"]}>
                <div className={styles["menu__item"]}>About</div>
                <div className={styles["menu__item"]}>Projects</div>
                <div className={styles["menu__item"]}>Blog</div>

            </div>
        </div>
    )
}

export default Nav;