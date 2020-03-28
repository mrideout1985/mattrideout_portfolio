import React from "react";
import weather from "../../images/weather.png"
import dice from "../../images/dice.png"
import bmi from "../../images/bmi.png"
import video from "../../images/video.png"


import styles from "./Projectspage.module.scss"

function Projectspage() {
    return (
        <div className={styles["container"]}>
            <div className={styles["container__project"]}><a className={styles["projicon"]} href="https://awesome-khorana-e2c3df.netlify.com/"><img src={video} alt="Movie Database" /></a> <div className={styles["container__description"]}>Movie Database search using built using React, Javascript & OMDB API.
            </div></div>

            <div className={styles["container__project"]}><a className={styles["projicon"]} href="https://nifty-spence-6799cd.netlify.com/"><img src={dice} alt="Dice Project" /></a> <div className={styles["container__description"]}>A dice rolling Application made in React using JavaScript.
            </div></div>
            <div className={styles["container__project"]}><a className={styles["projicon"]} href="https://sleepy-dubinsky-af7051.netlify.com/"><img src={weather} alt="Weather Project" /></a>
                <div className={styles["container__description"]}>A project I made using OpenWeather API to fetch the weather at any location.
            </div></div>
            <div className={styles["container__project"]}><a className={styles["projicon"]} href="https://vibrant-hypatia-cad447.netlify.com/"><img src={bmi} alt="BMI project" /> </a> <div className={styles["container__description"]}>A calculator that gets your BMI (Body Mass Index) based on your height and weight
            </div></div>
        </div>
    );
}

export default Projectspage;
