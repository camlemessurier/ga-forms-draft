import React from "react";
import { Container, Header, Input, Button } from "semantic-ui-react";
import ReportSummaryView from "./ReportSummaryView";

const Home = () => {
	return (
		<Container text>
			<Header as="h1" style={{ marginTop: "2em" }}>
				Incident Report Database
			</Header>

			<Button as="a" href="/report/new" style={{ marginTop: "2em" }}>
				New Report
			</Button>

			<ReportSummaryView />
		</Container>
	);
};

export default Home;
