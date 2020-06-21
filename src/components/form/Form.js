import React from "react";
import Button from "../button/Button";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";
import { Label } from "../label/label";

const Form = (props) => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<fieldset>
				<div className={styles["container"]}>
					<div className={styles["input-container"]}>
						<Label
							for="name"
							title={"required"}
							ariaLabel={"required"}
							labelName={"Name"}
							errorText={errors.name && "Required"}
						/>
						<input
							name="name"
							id="name"
							ref={register({
								required: "true",
								maxLength: 30,
							})}
						/>
					</div>
					<div className={styles["input-container"]}>
						<Label
							for="email"
							title={"required"}
							ariaLabel={"required"}
							labelName={"E-mail"}
							errorText={errors.email && "Required"}
						/>

						<input
							name="email"
							id="email"
							ref={register({ required: true, maxLength: 50 })}
						/>
					</div>
				</div>
				<hr />
				<div>
					<Label
						for="message"
						title={"required"}
						ariaLabel={"required"}
						labelName={"Message"}
						errorText={errors.message && "Required"}
					/>

					<textarea
						name="message"
						id="message"
						wrap="hard"
						ref={register({ required: true, max: 1000 })}
					/>
				</div>
				<hr />
				<div className={styles["button-container"]}>
					<Button
						type="submit"
						text="Submit"
						onClick={handleSubmit(onSubmit)}
					/>
					<Button
						type="button"
						onClick={() => props.onClose()}
						text="Close"
					/>
				</div>
			</fieldset>
		</form>
	);
};

export default Form;
