import React, { useState, Fragment, useEffect } from "react";
import {
	Form,
	Container,
	Header,
	Button,
	Divider,
	Icon,
	Table,
} from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { useParams } from "react-router";

import questions from "../questions";

// Components
import IncidentDetails from "./IncidentDetails";
import StaffDetails from "./StaffDetails";
import InjuryDetails from "./InjuryDetails";
import EquipDamage from "./EquipDamage";
import IncidentInvestigation from "./IncidentInvestigation";
import ReportMenu from "./ReportMenu";
import axios from "axios";
import ReportSection from "./ReportSection";

const ReportViewer = (props) => {
	const [report, setReport] = useState({});
	const { report_id } = useParams();

	useEffect(() => {
		axios.get(`/report/${report_id}`).then((result) => {
			setReport(result.data);
		});
	}, []);

	console.log(report);

	return (
		<Container text>
			<ReportMenu report={report} />
			<Header as="h2">{report.staff_name}</Header>

			<Divider horizontal>
				<Header as="h3">Staff Details</Header>
			</Divider>
			<ReportSection report={report} section={questions.staff_details} />

			<Divider horizontal>
				<Header as="h3">Incident Details</Header>
			</Divider>
			<ReportSection report={report} section={questions.incident_details} />

			<Divider horizontal>
				<Header as="h3">Injury Details</Header>
			</Divider>
			<ReportSection report={report} section={questions.injury_details} />

			<Divider horizontal>
				<Header as="h3">Equipment Damage Details</Header>
			</Divider>
			<ReportSection report={report} section={questions.equip_damage_details} />

			<Divider horizontal>
				<Header as="h3">Incident Investigation</Header>
			</Divider>
			<ReportSection
				report={report}
				section={questions.incident_investigation}
			/>
		</Container>
	);
};

export default ReportViewer;
