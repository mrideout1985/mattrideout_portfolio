import React from "react";
import { Link } from "react-router-dom"
import styles from './Nav.module.scss';

const Nav = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["name"]}><Link to="/">Matthew Rideout</Link></div>
            <div className={styles["menu"]}>
                <div className={styles["menu__item"]}><Link to="/projects">Projects</Link></div>
                <div className={styles["menu__item"]}><Link to="/blog">Blog</Link></div>
            </div>
        </div>
    )
}

export default Nav;