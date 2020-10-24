import React from "react";
import { Form, Header } from "semantic-ui-react";

const IncidentDetailsForm = () => {
	return (
		<>
			<Header as="h2"> Incident Details</Header>
			<Form.Field>
				<label>Incident Title (10 words or less)</label>
				<input name="incident_title" placeholder="Incident Title" />
			</Form.Field>
			<Form.Field>
				<label>Time</label>
				<input name="incident_time" type="time" />
			</Form.Field>
			<Form.Field>
				<label>Location</label>
				<input name="incident_location" placeholder="Location" />
			</Form.Field>
			<Form.Field>
				<label>Describe in detail what happened and how</label>
				<textarea
					name="incident_details"
					placeholder="Describe in detail what happened and how"
				/>
			</Form.Field>
			<Form.Field>
				<label>Incident Witnesses</label>
				<input name="incident_location" placeholder="Location" />
			</Form.Field>
			<Form.Field>
				<label>Incident Witnesses</label>
				<input name="incident_location" placeholder="Location" />
			</Form.Field>
			<Form.Group grouped>
				<label>Risk Controls Completed</label>
				<Form.Checkbox label="SWMS" name="SWMS_completed" />
				<Form.Checkbox label="Take 5" name="take5_completed" />
				<Form.Checkbox label="Fatigue Plan" name="fatigue_plan_followed" />
				<Form.Checkbox
					label="Site Specific Procedures"
					name="site_procedures_followed"
				/>
			</Form.Group>
		</>
	);
};

export default IncidentDetailsForm;
