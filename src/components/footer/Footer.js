import React from "react"
import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["container__copyright"]}>© 2020 Matthew Rideout.</div>

            <div className={styles["container__menu-items"]}>
                <a href="#" className="media-icons">
                    T
                    </a>
                <a href="#" className="media-icons">
                    I
                    </a>
                <a href="#" className="media-icons">
                    G
                    </a>
                <a href="#" className="media-icons">
                    E
                    </a>
                <a href="#" className="media-icons">
                    L
                    </a>
            </div>
        </div>
    )
}

export default Footer;