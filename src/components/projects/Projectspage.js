import React from "react";
import weather from "../../images/weather.png";
import dice from "../../images/dice.png";
import bmi from "../../images/bmi.png";
import video from "../../images/video.png";

import styles from "./Projectspage.module.scss";

function Projectspage() {
	return (
		<div className={styles["container"]}>
			<div className={styles["container__project"]}>
				<a
					className={styles["projicon"]}
					href="https://hardcore-noether-615a65.netlify.app/"
				>
					<img src={weather} alt="Weather Project" />
				</a>
				<div className={styles["container__description"]}>
					7 day Weather Forecast made using React, JS and OpenWeather
					API
				</div>
			</div>

			<div className={styles["container__project"]}>
				<a
					className={styles["projicon"]}
					href="https://wizardly-roentgen-c5a728.netlify.app/"
				>
					<img src={video} alt="Movie Database" />
				</a>{" "}
				<div className={styles["container__description"]}>
					Movie Database search using built using React and Typescript
				</div>
			</div>
			<div className={styles["container__project"]}>
				<a
					className={styles["projicon"]}
					href="https://clever-kowalevski-4ead45.netlify.app/"
				>
					<img src={bmi} alt="BMI project" />{" "}
				</a>{" "}
				<div className={styles["container__description"]}>
					A calculator made to closely resemble the one used on the
					NHS website
				</div>
			</div>
			<div className={styles["container__project"]}>
				<a
					className={styles["projicon"]}
					href="https://nifty-spence-6799cd.netlify.com/"
				>
					<img src={dice} alt="Dice Project" />
				</a>{" "}
				<div className={styles["container__description"]}>
					A dice rolling Application made in React using JavaScript.
				</div>
			</div>
		</div>
	);
}

export default Projectspage;
