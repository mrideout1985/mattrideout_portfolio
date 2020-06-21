import React, { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";

const modalRoot = document.body;

const Modal = ({ children, isModalOpen, toggleModal }) => {
	const container = useRef(document.createElement("div"));
	const currentContainer = container.current;

	useEffect(() => {
		if (isModalOpen) {
			modalRoot.appendChild(currentContainer);
		}

		return () => {
			if (currentContainer && currentContainer.parentNode === null) {
				return;
			} else {
				currentContainer.parentNode.removeChild(currentContainer);
			}
		};
	}, [currentContainer, isModalOpen]);

	const Wrapper = () => {
		return (
			<div className="TeSt">
				{isModalOpen && (
					<FocusLock>
						<div className={styles["container"]}>
							<div className={styles["container__body"]}>
								<div className={styles["heading"]}>
									<h1>Contact Me</h1>
								</div>
								{children}
							</div>
						</div>
					</FocusLock>
				)}
			</div>
		);
	};

	return createPortal(Wrapper(), currentContainer);
};

export default Modal;
