import React from "react";
import styles from "./Buttonnav.module.scss";

const ButtonNav = (props) => {
	return (
		<button
			onClick={() => {
				props.toggleState();
			}}
			className={`${styles["buttonnav"]} ${
				props.isToggled ? styles["bar1-open"] : ""
			}`}
		>
			<div
				className={`${styles["bar1"]} ${
					props.isToggled ? "" : styles["bar1-open"]
				}`}
			></div>
			<div
				className={`${styles["bar2"]} ${
					props.isToggled ? "" : styles["bar2-open"]
				}`}
			></div>
			<div
				className={`${styles["bar3"]} ${
					props.isToggled ? "" : styles["bar3-open"]
				}`}
			></div>
		</button>
	);
};

export default ButtonNav;
