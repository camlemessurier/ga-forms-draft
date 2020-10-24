import React from "react";

import { Form, Header } from "semantic-ui-react";

const IncidentInvestigationForm = () => {
	return (
		<>
			<Header as="h2"> Incident Investigation</Header>
			<Form.Field>
				<label>Causal Factors</label>
				<textarea name="causal_factors" />
			</Form.Field>
			<Header as="h4"> Risk Assessment</Header>
			See
			OHS/GlobalAcoustics/RiskAssessment/current/ga_RiskAssessments_RiskMatrix
			<Form.Field>
				<label>Likelihood of recurrence</label>
				<input name="recurrence_liklihood" />
			</Form.Field>
			<Form.Field>
				<label>Severity of outcome</label>
				<input name="outcome_severity" />
			</Form.Field>
			<Header as="h4"> Controls</Header>
			<Form.Field>
				<label>Actions Taken</label>
				<textarea name="actions_taken" />
			</Form.Field>
			<Form.Field>
				<label>Actions implemented on</label>
				<input name="action_date" />
			</Form.Field>
			<Form.Field>
				<label>By whom</label>
				<input name="actions_implementer" />
			</Form.Field>
		</>
	);
};

export default IncidentInvestigationForm;
