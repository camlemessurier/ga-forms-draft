import React from "react";
import { Form, Header } from "semantic-ui-react";

const StaffDetailsForm = () => {
	return (
		<>
			<Header as="h2"> Staff Details</Header>
			<Form.Field>
				<label>Name</label>
				<input name="staff_name" placeholder="First Name" />
			</Form.Field>
			<Form.Field>
				<label>Email</label>
				<input type="email" placeholder="Email" />
			</Form.Field>
			<Form.Field>
				<label>Phone</label>
				<input placeholder="Phone" />
			</Form.Field>

			<Form.Field control="select" label="Work Arrangment">
				<option value="male">Full Time</option>
				<option value="female">Casual</option>
			</Form.Field>
			<Form.Field>
				<label>Experience in job</label>
				<input placeholder="Experience in job" />
			</Form.Field>
			<Form.Field>
				<label>Shift Start</label>
				<input type="time" />
			</Form.Field>
		</>
	);
};

export default StaffDetailsForm;
