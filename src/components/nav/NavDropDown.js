import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavDropDown.module.scss";
import ButtonNav from "./Buttonnav";

const NavDropDown = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div
				className={`${styles["navbar"]} ${
					isOpen ? styles["navbar-open"] : ""
				}`}
			>
				<div className={styles["container__menu"]}>
					<Link
						className={styles["container__menu--item"]}
						to="/projects"
						onClick={handleToggle}
					>
						Projects
					</Link>
					<a
						href="https://drive.google.com/file/d/11_fr5PB4gK4dkNoPNMI9uCCiqAwqTrsk/view?usp=sharing"
						className={styles["container__menu--item"]}
						to="/blog"
						onClick={handleToggle}
					>
						CV
					</a>
				</div>

				<div className={styles["buttonnav"]}>
					<ButtonNav toggleState={handleToggle} isToggled={!isOpen} />
				</div>
			</div>
		</>
	);
};

export default NavDropDown;
