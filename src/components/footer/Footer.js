import React from "react"
import styles from "./Footer.module.scss"
import twitter from '../../images/twitter.svg'
import gmail from '../../images/gmail.svg'
import instagram from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'
import github from '../../images/github.svg'


const Footer = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["container__copyright"]}>© 2020 Matthew Rideout.</div>

            <div className={styles["container__menu-items"]}>
                <a href="#" className="media-icons">
                    <img src={twitter} alt="cry" className={styles["twitter"]} />

                </a>
                <a href="#" className="media-icons">
                    <img src={twitter} alt="cry" className={styles["twitter"]} />

                </a>
                <a href="#" className="media-icons">
                    <img src={twitter} alt="cry" className={styles["twitter"]} />

                </a>
                <a href="#" className="media-icons">
                    <img src={twitter} alt="cry" className={styles["twitter"]} />

                </a>
                <a href="#" className="media-icons">
                    <img src={twitter} alt="cry" className={styles["twitter"]} />

                </a>
            </div>
        </div>
    )
}

export default Footer;