import React from "react";
import styles from "./Header.module.scss";
import me from "../../images/me.jpg";

function Header() {
	return (
		<div className={styles["container"]}>
			<img src={me} alt="matt" className={styles["container__photo"]} />
			<div className={styles["container__about-me"]}>
				<h1>Matthew Rideout</h1>
				<h2>Front-end Web Developer</h2>
			</div>
		</div>
	);
}

export default Header;
