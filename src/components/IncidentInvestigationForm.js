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

const IncidentInvestigationForm = () => {
	return (
		<>
			<Header as="h2"> Incident Investigation</Header>
			<Field
				component={renderTextArea}
				label="Causal factors"
				name="causal_factors"
				placeholder="Causal factors"
			/>
			<Header as="h4"> Risk Assessment</Header>
			See
			OHS/GlobalAcoustics/RiskAssessment/current/ga_RiskAssessments_RiskMatrix
			<Field
				component={Form.Input}
				label="Liklihood of recurrence"
				name="recurrence_liklihood"
				placeholder="Liklihood of recurrence"
			/>
			<Field
				component={Form.Input}
				label="Severity of outcome"
				name="outcome_severity"
				placeholder="Severity of outcome"
			/>
			<Header as="h4"> Controls</Header>
			<Field
				component={renderTextArea}
				label="Actions taken"
				name="actions_taken"
				placeholder="Actions taken"
			/>
			<Field
				component={renderTextArea}
				label="Actions implemented on"
				name="actions_implemented"
				type="date"
			/>
			<Field
				component={renderTextArea}
				label="By whom"
				name="actions_implementer"
				placeholder="By whom"
			/>
		</>
	);
};

export default reduxForm({
	form: "report",
})(IncidentInvestigationForm);
