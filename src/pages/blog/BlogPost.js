import React from "react";
import PropTypes from "prop-types";
import styles from "./BlogPost.module.scss";

const BlogPost = ({ children, Title, Description, Quote }) => {
  return (
    <>
      <div className={styles["container"]}>
        <h1 className={styles["container__title"]}>{Title}</h1>
        <h3 className={styles["container__description"]}>{Description}</h3>
      </div>
      <div className={styles['blog-main']}>{children}</div>

    </>
  );
};

// BLOG TEMPLATE
export default BlogPost;
