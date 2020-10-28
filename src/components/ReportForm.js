import React, { useState, useEffect } from "react";
import { Form, Container, Header, Button } from "semantic-ui-react";
import { useParams } from "react-router";

// Components
import axios from "axios";
import questions from "../questions";
import FormField from "./FormField";

const ReportForm = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(report_id);
		if (report_id !== undefined) {
			axios.delete(`/report/${report_id}`);
		}

		axios.post("/report", report);

		window.location = "/";
	};

	const [report, setReport] = useState({
		incident_equip_damage: false,
		incident_injury: false,
	});

	const { report_id } = useParams();

	useEffect(() => {
		if (report_id !== undefined) {
			axios.get(`/report/${report_id}`).then((result) => {
				setReport(result.data);
			});
		}
	}, []);

	const handleInputChange = (event) => {
		const fieldName = event.target.name;
		const value =
			event.target.type === "checkbox"
				? event.target.checked
				: event.target.value;

		setReport({ ...report, [fieldName]: value });
	};

	const showInjury = () => (
		<>
			<Header as="h2">Injury Details</Header>
			{questions.injury_details.map((question) => (
				<FormField
					question={question}
					handleInputChange={handleInputChange}
					key={question.name}
					value={match(question)}
				/>
			))}
		</>
	);

	const showEquipDamage = () => (
		<>
			<Header as="h2">Equipment Damage Details</Header>
			{questions.equip_damage_details.map((question) => (
				<FormField
					question={question}
					handleInputChange={handleInputChange}
					key={question.name}
					value={match(question)}
				/>
			))}
		</>
	);

	const match = (question) => {
		for (const field in report) {
			if (field === question.name) {
				return report[field];
			}
		}
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
						value={match(question)}
					/>
				))}

				<Header as="h2">Incident Details</Header>
				{questions.incident_details.map((question) => (
					<FormField
						question={question}
						handleInputChange={handleInputChange}
						key={question.name}
						value={match(question)}
					/>
				))}

				{report.incident_injury && showInjury()}
				{report.incident_equip_damage && showEquipDamage()}

				<Header as="h2">Incident Investigation</Header>
				{questions.incident_investigation.map((question) => (
					<FormField
						question={question}
						handleInputChange={handleInputChange}
						key={question.name}
						value={match(question)}
					/>
				))}

				<Container style={{ textAlign: "center" }} text>
					<Button type="submit">Submit</Button>
				</Container>
			</Form>
		</Container>
	);
};

export default ReportForm;
