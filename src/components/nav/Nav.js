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
			<Link className={styles["container__name"]} to="/">
				Matthew Rideout
			</Link>

			{width > 635 ? (
				<div className={styles["container__menu"]}>
					<Link
						className={[
							styles["container__menu--item"],
							styles["i1"],
						].join(" ")}
						to="/projects"
					>
						Projects
					</Link>
					<Link
						className={[
							styles["container__menu--item"],
							styles["i2"],
						].join(" ")}
						to="/blog"
					>
						Blog
					</Link>
				</div>
			) : (
				<NavDropDown />
			)}
		</div>
	);
};

export default Nav;
