import React from "react"
import styles from "./About.module.scss";

export default function About() {
    return (
        <div className={styles["container"]}>
            <div className={styles["container__about"]}><h2>About Me</h2>
                <p>Laboris voluptate eiusmod minim mollit duis ad do ut proident deserunt esse mollit aute. Consequat mollit cillum aliquip id. Cillum ut labore veniam officia aute deserunt sit amet pariatur labore tempor eiusmod. Duis sunt voluptate voluptate ipsum anim cupidatat Lorem tempor voluptate velit velit deserunt minim. Exercitation labore irure labore duis et eiusmod. Adipisicing magna quis sunt esse est anim pariatur.</p></div>
            <div className={styles["container__contact"]}><h2>Contact
            </h2>
                <a href="#" className="media-icons">Twitter</a>
                <a href="#" className="media-icons">Instagram</a>
                <a href="#" className="media-icons">Github</a>
                <a href="#" className="media-icons">Email</a>
                <a href="#" className="media-icons">LinkedIn</a>
            </div>
        </div>
    )
}