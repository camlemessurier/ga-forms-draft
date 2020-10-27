import React from "react";
import { List, Button } from "semantic-ui-react";

const ReportSummary = (props) => {
	return (
		<List.Item href={`/report/${props.report_id}`}>
			<List.Content>
				<List.Header as="a">{props.staff_name}</List.Header>
				<List.Description as="a">{props.report_date}</List.Description>
			</List.Content>
			<List.Content>
				<List.Description as="a">{props.incident_details}</List.Description>
			</List.Content>
		</List.Item>
	);
};

export default ReportSummary;
