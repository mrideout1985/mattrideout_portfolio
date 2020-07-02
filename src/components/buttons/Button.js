import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
	return (
		<button
			type={props?.type}
			className={props?.type !== "submit" ? styles["cancel"] : ""}
			onClick={props?.onClick}
		>
			{props?.text}
		</button>
	);
};

export default Button;
