import React from "react";
import Links from "react-router-dom";
import styles from "./About.module.scss";
import twitter from "../../images/twitter.svg";
import gmail from "../../images/gmail.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";

export default function About() {
  return (
    <div className={styles["container"]}>
      <div className={styles["container__about"]}>
        <h2>About Me</h2>
        <p>
          I am a junior front-end developer that works predominantley with
          JavaScript and the React Framework. I am a creative, hard working
          individual with a passion for teamwork, learning and problem solving.
          Recently I have been able to explore this passion by throwing myself
          into the world of web development. I am currently looking to expand my
          skill set in a professional environment. Please refer to my portfolio,
          blog, GitHub account or CodeSandbox examples to see my progression.
        </p>
      </div>
      <div className={styles["container__contact"]}>
        <h2>Contact</h2>

        <div className={styles["menu-items"]}>
          <div className={styles["link-container"]}>
            <div className={styles["icon"]}>
              <div className={styles["img"]}>
                <img src={twitter} alt="cry" className={styles["twitter"]} />
              </div>
            </div>
            <div className={styles["link"]}>Twitter</div>
          </div>
          <div className={styles["link-container"]}>
            <div className={styles["icon"]}>
              <div className={styles["img"]}>
                <img src={github} alt="cry" className={styles["twitter"]} />
              </div>
            </div>
            <div className={styles["link"]}>Github</div>
          </div>
          <div className={styles["link-container"]}>
            <div className={styles["icon"]}>
              <div className={styles["img"]}>
                <img src={linkedin} alt="cry" className={styles["twitter"]} />
              </div>
            </div>
            <div className={styles["link"]}>Linkedin</div>
          </div>
          <div className={styles["link-container"]}>
            <div className={styles["icon"]}>
              <div className={styles["img"]}>
                <img src={instagram} alt="cry" className={styles["twitter"]} />
              </div>
            </div>
            <div className={styles["link"]}>Instagram</div>
          </div>
          <div className={styles["link-container"]}>
            <div className={styles["icon"]}>
              <div className={styles["img"]}>
                <img src={gmail} alt="cry" className={styles["twitter"]} />
              </div>
            </div>
            <div className={styles["link"]}>Gmail</div>
          </div>
          {/* <a href="#" className="media-icons">

                    </a>
                    <a href="#" className="media-icons">


                    </a>
                    <a href="#" className="media-icons">

                    </a>
                    <a href="#" className="media-icons">

                    </a>
                    <a href="#" className="media-icons">


                    </a> */}
        </div>
      </div>
    </div>
  );
}
