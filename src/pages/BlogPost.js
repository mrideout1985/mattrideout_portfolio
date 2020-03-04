import React from "react";
import PropTypes from "prop-types";
import "./BlogPost.module.scss";

const BlogPost = ({ children, Title, Description, Quote }) => {
  return (
    <>
      <div className={styles["blog-title"]}>
        <h1>{Title}</h1>
        <h3>{Description}</h3>
        <p>{Quote}</p>
      </div>
      <div className={styles['blog-main']}>{children}</div>

    </>
  );
};

export default BlogPost;
