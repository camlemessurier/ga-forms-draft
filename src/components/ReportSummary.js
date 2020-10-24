import React from "react";
import { Card } from "semantic-ui-react";

const ReportSummary = (props) => {
	return (
		<Card href="#card-example-link-card" fluid>
			<Card.Content
				textAlign="left"
				header={props.staff_name}
				meta={props.report_date}
				description={props.report_title}
			/>
		</Card>
	);
};

export default ReportSummary;
