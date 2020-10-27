import React, { useState, Fragment, useParams } from "react";
import { Form, Container, Header, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

// Components
import IncidentDetailsForm from "./IncidentDetailsForm";
import StaffDetailsForm from "./StaffDetailsForm";
import InjuryDetailsForm from "./InjuryDetailsForm";
import EquipDamageForm from "./EquipDamageForm";
import IncidentInvestigationForm from "./IncidentInvestigationForm";
import axios from "axios";

const ReportForm = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post("/report", props.values);
		window.location = "/";
	};

	return (
		<Container text>
			<Form onSubmit={handleSubmit}>
				<StaffDetailsForm />
				<IncidentDetailsForm />

				{/* Display based on form input */}
				{typeof props.values !== "undefined"
					? props.values.incident_injury && <InjuryDetailsForm />
					: null}
				{typeof props.values !== "undefined"
					? props.values.incident_equip_damage && <EquipDamageForm />
					: null}

				{/* {} */}
				<IncidentInvestigationForm />

				<Container style={{ textAlign: "center" }} text>
					<Button type="submit">Submit</Button>
				</Container>
			</Form>
		</Container>
	);
};

const mapStateToProps = (state) => {
	return state.form.report
		? {
				values: state.form.report.values,
				submitSucceeded: state.form.report.submitSucceeded,
		  }
		: {};
};

export default connect(mapStateToProps)(ReportForm);
