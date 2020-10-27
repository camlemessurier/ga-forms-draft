import React from "react";
import { Form, Header } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";

const renderRadio = (field) => (
	<Form.Radio
		checked={field.input.value === field.radioValue}
		label={field.label}
		name={field.input.name}
		onChange={(e, { checked }) => field.input.onChange(field.radioValue)}
	/>
);

const renderTextArea = (field) => (
	<Form.TextArea
		{...field.input}
		label={field.label}
		placeholder={field.placeholder}
	/>
);

const InjuryDetailsForm = () => {
	return (
		<>
			<Header as="h2"> Injury Details</Header>

			<Field
				component={Form.Input}
				label="Nature of injury"
				name="injury_nature"
				placeholder="Nature of injury"
			/>

			<Field
				component={Form.Input}
				label="Location on body"
				name="injury_location"
				placeholder="Location on body"
			/>

			<Field
				component={Form.Input}
				label="Agency"
				name="injury_agency"
				placeholder="Agency"
			/>

			<Form.Group inline>
				<label>Stopped Work</label>
				<Field
					component={renderRadio}
					label="Yes"
					name="stopped_work"
					radioValue={"Yes"}
				/>
				<Field
					component={renderRadio}
					label="No"
					name="stopped_work"
					radioValue={"No"}
				/>
			</Form.Group>
			<Form.Group inline>
				<label>Treatment received</label>
				<Field
					component={renderRadio}
					label="Yes"
					name="treatment_received"
					radioValue={"Yes"}
				/>
				<Field
					component={renderRadio}
					label="No"
					name="treatment_received"
					radioValue={"No"}
				/>
			</Form.Group>

			<Field
				component={renderTextArea}
				label="Injury Details"
				name="injury_details"
				placeholder="Injury Details"
			/>
		</>
	);
};

export default reduxForm({
	form: "report",
})(InjuryDetailsForm);
