import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import NavDropDown from "./NavDropDown";
import { useWindowSize } from "react-use";

const Nav = () => {
	// const [mobile, setMobile] = useState(false);
	const { width } = useWindowSize();

	return (
		<div className={styles["container"]}>
			<div className={styles["container__name"]}>
				<Link to="/">Matt Rideout</Link>
			</div>

			{width > 635 ? (
				<div className={styles["container__menu"]}>
					<Link
						to="/projects"
						className={styles["container__menu--item"]}
					>
						Projects
					</Link>
					<a
						href="https://drive.google.com/file/d/11_fr5PB4gK4dkNoPNMI9uCCiqAwqTrsk/view?usp=sharing"
						className={styles["container__menu--item"]}
					>
						CV
					</a>
				</div>
			) : (
				<NavDropDown />
			)}
		</div>
	);
};

export default Nav;
