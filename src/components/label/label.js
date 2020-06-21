import React from "react";
import "./label.module.scss";

const Label = (props) => {
	return (
		<div
			style={{
				display: "flex",
				// justifyContent: "space-between",
			}}
		>
			<label
				htmlFor={props.for}
				style={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				{props.labelName}
				{props.errorText ? (
					<div role="alert" aria-live="polite">
						{props.errorText}
					</div>
				) : (
					props.validationWarning && (
						<div role="alert" aria-live="polite">
							{props.validationWarning}
						</div>
					)
				)}
			</label>
		</div>
	);
};

export { Label };
