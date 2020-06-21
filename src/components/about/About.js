import React, { useState } from "react";
import styles from "./About.module.scss";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";
import Modal from "../modal/Modal";
import Form from "../form/Form";

export default function About() {
	const [shouldShowModal, setShouldShowModal] = useState(false);

	const toggleModal = () => {
		setShouldShowModal(!shouldShowModal);
	};

	return (
		<div className={styles["container"]}>
			<div className={styles["container__about"]}>
				<h2>About Me</h2>
				<p>
					A junior front-end developer that works predominantley with
					JavaScript, Sass and the React Framework. I am a creative,
					hard working individual with an appetite for design,
					learning, team work and problem solving. Recently, I have
					been able to satiate this appetite by passionately delving
					into the world of web development, building websites and
					apps using my own initiative, and working closely with
					friends. I am currently looking to enhance my skill set in a
					professional environment. Please refer to my portfolio, blog
					or GitHub accounts to map my progress.
				</p>
			</div>
			<div className={styles["container__contact"]}>
				<h2>More</h2>

				<div className={styles["menu-items"]}>
					{/* <div className={styles["link-container"]}>
                        <div className={styles["icon"]}>
                            <div className={styles["img"]}>
                                <img src={twitter} alt="cry" className={styles["twitter"]} />

                            </div>
                        </div>
                        <div className={styles["link"]}>Twitter</div>
                    </div> */}
					<div className={styles["link-container"]}>
						<div className={styles["icon"]}>
							<a
								href="https://github.com/mrideout1985"
								tabIndex={-1}
							>
								<div className={styles["img"]}>
									<img
										src={github}
										alt="cry"
										className={styles["twitter"]}
									/>
								</div>
							</a>
						</div>
						<div className={styles["link"]}>
							<a href="https://github.com/mrideout1985">Github</a>
						</div>
					</div>
					<div className={styles["link-container"]}>
						<div className={styles["icon"]}>
							<a
								href="https://www.linkedin.com/in/matthew-rideout-6b184a19b/"
								tabIndex={-1}
							>
								<div className={styles["img"]}>
									<img
										src={linkedin}
										alt="cry"
										className={styles["twitter"]}
									/>
								</div>
							</a>
						</div>
						<div className={styles["link"]}>
							<a href="https://www.linkedin.com/in/matthew-rideout-6b184a19b/">
								Linkedin
							</a>
						</div>
					</div>
					<div className={styles["link-container"]}>
						<div className={styles["icon"]}>
							<a
								href="https://www.instagram.com/mattr1985/?hl=en"
								tabIndex={-1}
							>
								<div className={styles["img"]}>
									<img
										src={instagram}
										alt="cry"
										className={styles["twitter"]}
									/>
								</div>
							</a>
						</div>
						<div className={styles["link"]}>
							<a href="https://www.instagram.com/mattr1985/?hl=en">
								Instagram
							</a>
						</div>
					</div>

					<Modal
						isModalOpen={shouldShowModal}
						toggleModal={() => setShouldShowModal(true)}
						onClose={() => setShouldShowModal(false)}
					>
						<Form onClose={toggleModal} />
					</Modal>
					<button
						onClick={toggleModal}
						className={styles["contact-me"]}
						text="Contact"
					>
						Contact
					</button>
				</div>
			</div>
		</div>
	);
}
