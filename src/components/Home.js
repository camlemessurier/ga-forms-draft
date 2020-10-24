import React from "react";
import { Container, Header, Input, Button } from "semantic-ui-react";
import ReportSummaryView from "./ReportSummaryView";

const Home = () => {
	return (
		<Container text>
			<Header as="h1" style={{ marginTop: "4em" }}>
				Incident Report Database
			</Header>
			<Input
				icon="search"
				placeholder="Search..."
				style={{ marginTop: "2em" }}
				fluid
			/>
			<Button as="a" href="/new" style={{ marginTop: "2em" }}>
				New Report
			</Button>

			<ReportSummaryView />
		</Container>
	);
};

export default Home;
