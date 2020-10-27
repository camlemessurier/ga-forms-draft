import React, { useState, useParams } from "react";
import { Form, Container, Header, Button } from "semantic-ui-react";

// Components

import InjuryDetailsForm from "./InjuryDetailsForm";
import EquipDamageForm from "./EquipDamageForm";
import axios from "axios";
import questions from "../questions";
import FormField from "./FormField";

const ReportForm = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post("/report", report);
		window.location = "/";
	};

	const [report, setReport] = useState({
		incident_equip_damage: true,
		incident_injury: true,
	});

	const handleInputChange = (event) => {
		const fieldName = event.target.name;
		const value =
			event.target.type === "checkbox"
				? event.target.checked
				: event.target.value;

		setReport({ ...report, [fieldName]: value });
	};

	console.log(report);

	return (
		<Container text>
			<Form onSubmit={handleSubmit}>
				<Header as="h2">Staff Details</Header>
				{questions.staff_details.map((question) => (
					<FormField
						question={question}
						handleInputChange={handleInputChange}
						key={question.name}
					/>
				))}

				{report.incident_injury && <InjuryDetailsForm />}
				{report.incident_equip_damage && <EquipDamageForm />}

				<Container style={{ textAlign: "center" }} text>
					<Button type="submit">Submit</Button>
				</Container>
			</Form>
		</Container>
	);
};

export default ReportForm;
