import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import ReportSummary from "./ReportSummary";

const ReportSummaryView = () => {
	const [pageNum, setPageNum] = useState(1);

	const report = {
		report_title: "gello",
		report_date: "18",
		staff_name: "tony",
	};

	return (
		<Container style={{ margin: "3em" }}>
			<ReportSummary {...report} />
			<ReportSummary {...report} />
		</Container>
	);
};

export default ReportSummaryView;
