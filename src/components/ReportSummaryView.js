import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import ReportSummary from "./ReportSummary";
import { List } from "semantic-ui-react";
import axios from "axios";

const ReportSummaryView = () => {
	const [pageNum, setPageNum] = useState(1);
	const [reports, setReports] = useState([]);

	useEffect(() => {
		axios.get("/reportsSum").then((result) => {
			setReports(result.data);
		});
	}, []);

	return (
		<Container style={{ margin: "3em" }}>
			<List selection divided relaxed className="reportSummaryView">
				{reports.map((report) => (
					<ReportSummary {...report} key={report.report_id} />
				))}
			</List>
		</Container>
	);
};

export default ReportSummaryView;
