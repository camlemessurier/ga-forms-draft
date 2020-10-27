import React from "react";
import { Form, Header } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";

const renderSelect = (field) => (
	<Form.Select
		label={field.label}
		name={field.input.name}
		onChange={(e, { value }) => field.input.onChange(value)}
		options={field.options}
		placeholder={field.placeholder}
		value={field.input.value}
	/>
);

const StaffDetailsForm = () => {
	return (
		<>
			<Header as="h2"> Staff Details</Header>
			<Field
				component={Form.Input}
				label="Staff name"
				name="staff_name"
				placeholder="Staff name"
				value="hello"
			/>
			<Field
				component={Form.Input}
				label="Staff email"
				name="staff_email"
				placeholder="Staff email"
			/>
			<Field
				component={Form.Input}
				label="Phone number"
				name="staff_phone"
				placeholder="Phone number"
			/>
			<Field
				component={renderSelect}
				label="Work Arrangement"
				name="staff_work_arrangment"
				options={[
					{ text: "Full Time", value: "full_time" },
					{ text: "Casual", value: "casual" },
				]}
				placeholder="Full Time"
			/>
			<Field
				component={Form.Input}
				label="Experience in hob"
				name="staff_experience"
				placeholder="Experience in hob"
			/>
			<Field
				component={Form.Input}
				label="Shift Start"
				name="staff_shift_start"
				type="time"
			/>
		</>
	);
};

export default reduxForm({
	form: "report",
})(StaffDetailsForm);
