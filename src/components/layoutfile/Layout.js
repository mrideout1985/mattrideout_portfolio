import React from "react";
import styles from "./Layout.module.scss";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import NavDropDown from "../nav/NavDropDown";

const Layout = ({ children }) => {
	return (
		<>
			<Nav />

			<div className={styles["container"]}>{children}</div>
			<Footer id={styles["footer"]} />
		</>
	);
};

export default Layout;
