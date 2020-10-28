import React, { useState, useEffect } from "react";
import { Container, Header, Divider } from "semantic-ui-react";

import { useParams } from "react-router";

import questions from "../questions";

// Components
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

			{report.incident_injury === "true" && (
				<>
					<Divider horizontal>
						<Header as="h3">Injury Details</Header>
					</Divider>
					<ReportSection report={report} section={questions.injury_details} />
				</>
			)}

			{report.incident_equip_damage === "true" && (
				<>
					<Divider horizontal>
						<Header as="h3">Equipment Damage Details</Header>
					</Divider>
					<ReportSection
						report={report}
						section={questions.equip_damage_details}
					/>
				</>
			)}

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
