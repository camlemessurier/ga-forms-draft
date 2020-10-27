import React from "react";
import { Form, Header } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";

const renderTextArea = (field) => (
	<Form.TextArea
		{...field.input}
		label={field.label}
		placeholder={field.placeholder}
	/>
);

const renderCheckbox = (field) => (
	<Form.Checkbox
		checked={!!field.input.value}
		name={field.input.name}
		label={field.label}
		onChange={(e, { checked }) => field.input.onChange(checked)}
	/>
);

const IncidentDetailsForm = (props) => {
	return (
		<>
			<Header as="h2"> Incident Details</Header>
			<Field
				component={Form.Input}
				label="Incident Time"
				name="incident_time"
				placeholder="Incident Time"
				type="time"
			/>
			<Field
				component={Form.Input}
				label="Incident location"
				name="incident_location"
				placeholder="Incident location"
			/>
			<Field
				component={renderTextArea}
				label="Incident Details"
				name="incident_details"
				placeholder="Incident Details"
			/>

			<Field
				component={Form.Input}
				label="Incident witnesses"
				name="incident_witnesses"
				placeholder="Incident witnesses"
			/>
			<Form.Group grouped>
				<h4>Completed:</h4>
				<Field component={renderCheckbox} label="SWMS" name="SWMS_completed" />
				<Field
					component={renderCheckbox}
					label="Take5"
					name="take5_completed"
				/>
				<Field
					component={renderCheckbox}
					label="Fatigue plan"
					name="fatigue_plan_completed"
				/>
				<Field
					component={renderCheckbox}
					label="Site procedures followed"
					name="site_procedures_followed"
				/>
			</Form.Group>
			<Form.Group grouped>
				<h4>Outcome of incident</h4>
				<Field
					component={renderCheckbox}
					label="Injury"
					name="incident_injury"
					defaultChecked="false"
				/>
				<Field
					component={renderCheckbox}
					label="Equipment Damage"
					name="incident_equip_damage"
					value="false"
				/>
			</Form.Group>
		</>
	);
};

export default reduxForm({
	form: "report",
})(IncidentDetailsForm);
