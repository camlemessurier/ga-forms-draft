import React from "react";
import { Form, Header } from "semantic-ui-react";

const InjuryDetailsForm = () => {
	return (
		<>
			<Header as="h2"> Injury Details</Header>
			<Form.Field label="Nature of injury">
				<input name="injury_nature" placeholder="Nature of injury" />
			</Form.Field>
			<Form.Field>
				<label>Location on body</label>
				<input name="injury_location" type="Location on body" />
			</Form.Field>
			<Form.Field>
				<label>Agency</label>
				<input name="injury_agency" placeholder="Agency" />
			</Form.Field>

			<Form.Field control="select" label="Did the injured person stop work">
				<option value="Yes">Yes</option>
				<option value="No">No</option>
			</Form.Field>
			<Form.Field control="select" label="Treatment received">
				<option value="Yes">Yes</option>
				<option value="No">No</option>
			</Form.Field>

			<Form.Field>
				<label>Treatment details</label>
				<textarea name="injury_details" placeholder="Treatment Details" />
			</Form.Field>
		</>
	);
};

export default InjuryDetailsForm;
