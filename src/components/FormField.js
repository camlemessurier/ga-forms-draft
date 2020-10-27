import React from "react";
import { Form, Select } from "semantic-ui-react";

const FormField = (props) => {
	if (props.question.type === "textarea") {
		return (
			<Form.Field>
				<label>
					{props.question.text} <span> </span>
					<Form.TextArea
						type={props.question.type}
						name={props.question.name}
						onChange={props.handleInputChange}
					/>
				</label>
			</Form.Field>
		);
	} else if (props.question.type === "select") {
		return (
			<Form.Field
				control={Select}
				label={props.question.text}
				options={props.question.options}
			/>
		);
	} else {
		return (
			<Form.Field>
				<label>
					{props.question.text} <span> </span>
					<input
						type={props.question.type}
						name={props.question.name}
						onChange={props.handleInputChange}
					/>
				</label>
			</Form.Field>
		);
	}
};

export default FormField;
