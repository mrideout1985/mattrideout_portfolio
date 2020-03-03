import React from "react";
import Links from "react-router-dom";
import styles from "./About.module.scss";
import twitter from '../../images/twitter.svg'
import gmail from '../../images/gmail.svg'
import instagram from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'
import github from '../../images/github.svg'




export default function About() {
    return (
        <p className={styles["container"]}>
            <p className={styles["container__about"]}>
                <h2>About Me</h2>
                <p>
                    Laboris voluptate eiusmod minim mollit duis ad do ut
                    proident deserunt esse mollit aute. Consequat mollit cillum
                    aliquip id. Cillum ut labore veniam officia aute deserunt
                    sit amet pariatur labore tempor eiusmod. Duis sunt voluptate
                    voluptate ipsum anim cupidatat Lorem tempor voluptate velit
                    velit deserunt minim. Exercitation labore irure labore duis
                    et eiusmod. Adipisicing magna quis sunt esse est anim
                    pariatur.
                </p>
            </p>
            <div className={styles["container__contact"]}>
                <h2>Contact</h2>

                <div className={styles["menu-items"]}>
                    <div className={styles["link-container"]}>
                        <div className={styles["icon"]}>
                            <div className={styles["img"]}>
                                <img src={twitter} alt="cry" className={styles["twitter"]} />

                            </div>
                        </div>
                        <div className={styles["link"]}>Twitter</div>
                    </div>
                    <div className={styles["link-container"]}>
                        <div className={styles["icon"]}>
                            <div className={styles["img"]}>
                                <img src={github} alt="cry" className={styles["twitter"]} />
                            </div>
                        </div>
                        <div className={styles["link"]}>Github</div>
                    </div>
                    <div className={styles["link-container"]}>
                        <div className={styles["icon"]}>
                            <div className={styles["img"]}>
                                <img src={linkedin} alt="cry" className={styles["twitter"]} />
                            </div>
                        </div>
                        <div className={styles["link"]}>Linkedin</div>
                    </div>
                    <div className={styles["link-container"]}>
                        <div className={styles["icon"]}>
                            <div className={styles["img"]}>
                                <img src={instagram} alt="cry" className={styles["twitter"]} />
                            </div>
                        </div>
                        <div className={styles["link"]}>Instagram</div>
                    </div>
                    <div className={styles["link-container"]}>
                        <div className={styles["icon"]}>
                            <div className={styles["img"]}>
                                <img src={gmail} alt="cry" className={styles["twitter"]} />
                            </div>
                        </div>
                        <div className={styles["link"]}>Gmail</div>
                    </div>
                    {/* <a href="#" className="media-icons">

                    </a>
                    <a href="#" className="media-icons">


                    </a>
                    <a href="#" className="media-icons">

                    </a>
                    <a href="#" className="media-icons">

                    </a>
                    <a href="#" className="media-icons">


                    </a> */}
                </div>
            </div>
        </p>
    );
}
