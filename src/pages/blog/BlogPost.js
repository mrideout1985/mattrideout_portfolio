import React from "react";
import styles from "./BlogPost.module.scss";

const BlogPost = ({ children, Title, Description, Quote }) => {
	return (
		// Currently taking blog out of my portfolio - as I feel this is not required.

		<>
			<div className={styles["container"]}>
				<h1 className={styles["container__title"]}>{Title}</h1>
				<h3 className={styles["container__description"]}>
					{Description}
				</h3>
				<h4>{Quote}</h4>
			</div>
			<div className={styles["blog-main"]}>{children}</div>
		</>
	);
};

// BLOG TEMPLATE
export default BlogPost;
