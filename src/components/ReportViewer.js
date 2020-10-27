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

// Components
import IncidentDetails from "./IncidentDetails";
import StaffDetails from "./StaffDetails";
import InjuryDetails from "./InjuryDetails";
import EquipDamage from "./EquipDamage";
import IncidentInvestigation from "./IncidentInvestigation";
import ReportMenu from "./ReportMenu";
import axios from "axios";

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
			<StaffDetails report={report} />
			<IncidentDetails report={report} />
			<InjuryDetails report={report} />
			<EquipDamage report={report} />
			<IncidentInvestigation report={report} />
		</Container>
	);
};

export default ReportViewer;
