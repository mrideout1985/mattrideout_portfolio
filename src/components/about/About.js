import React from "react";
import Links from "react-router-dom";
import styles from "./About.module.scss";
import twitter from "../../images/twitter.svg";
import gmail from "../../images/gmail.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";

export default function About() {
    return (
        <div className={styles["container"]}>
            <div className={styles["container__about"]}>
                <h2>About Me</h2>
                <p>
                    I am a junior front-end developer that works predominantley with
                    JavaScript and the React Framework. I am a creative, hard working
                    individual with a passion for teamwork, learning and problem solving.
                    Recently I have been able to explore this passion by throwing myself
                    into the world of web development. I am currently looking to expand my
                    skill set in a professional environment. Please refer to my portfolio,
                    blog, GitHub account or CodeSandbox examples to see my progression.
        </p>
            </div>
            <div className={styles["container__contact"]}>
                <h2>More</h2>

                <div className={styles["menu-items"]}>
                    {/* <div className={styles["link-container"]}>
                        <div className={styles["icon"]}>
                            <div className={styles["img"]}>
                                <img src={twitter} alt="cry" className={styles["twitter"]} />

                            </div>
                        </div>
                        <div className={styles["link"]}>Twitter</div>
                    </div> */}
                    <div className={styles["link-container"]}>
                        <div className={styles["icon"]}>
                            <a href="https://github.com/mrideout1985" > <div className={styles["img"]}>
                                <img src={github} alt="cry" className={styles["twitter"]} />
                            </div></a>
                        </div>
                        <div className={styles["link"]}><a href="https://github.com/mrideout1985" >Github</a></div>
                    </div>
                    <div className={styles["link-container"]}>
                        <div className={styles["icon"]}>
                            <a href="https://www.linkedin.com/in/matthew-rideout-6b184a19b/" ><div className={styles["img"]}>
                                <img src={linkedin} alt="cry" className={styles["twitter"]} />
                            </div></a>
                        </div>
                        <div className={styles["link"]}><a href="https://www.linkedin.com/in/matthew-rideout-6b184a19b/" >Linkedin</a></div>
                    </div>
                    <div className={styles["link-container"]}>
                        <div className={styles["icon"]}>
                            <a href="https://www.instagram.com/mattr1985/?hl=en" ><div className={styles["img"]}>
                                <img src={instagram} alt="cry" className={styles["twitter"]} />
                            </div></a>
                        </div>
                        <div className={styles["link"]}><a href="https://www.instagram.com/mattr1985/?hl=en">Instagram</a></div>
                    </div>
                    <div className={styles["link-container"]}>
                        <div className={styles["icon"]}>
                            <a href="mailto:mrideout@gmail.com?Subject=Hello"> <div className={styles["img"]}>
                                <img src={gmail} alt="cry" className={styles["twitter"]} />
                            </div></a>
                        </div>
                        <div className={styles["link"]}> <a href="mailto:mrideout@gmail.com?Subject=Hello">Gmail</a></div>
                    </div>

                </div>
            </div>
        </div>
    );
}
