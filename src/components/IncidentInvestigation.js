import React from "react";
import {
	Form,
	Container,
	Header,
	Button,
	Divider,
	Icon,
	Table,
} from "semantic-ui-react";

const IncidentInvestigation = (props) => {
	return (
		<>
			<Divider horizontal>
				<Header as="h4">Incident Details</Header>
			</Divider>
			<Table definition>
				<Table.Body>
					{props.report.causal_factors !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Incident</Table.Cell>
							<Table.Cell>{props.report.causal_factors}</Table.Cell>
						</Table.Row>
					) : null}

					{props.report.recurrence_liklihood !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Email</Table.Cell>
							<Table.Cell>{props.report.recurrence_liklihood}</Table.Cell>
						</Table.Row>
					) : null}

					{props.report.outcome_severity !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Phone</Table.Cell>
							<Table.Cell>{props.report.outcome_severity}</Table.Cell>
						</Table.Row>
					) : null}

					{props.report.resulting_risk !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Staff experience</Table.Cell>
							<Table.Cell>{props.report.resulting_risk}</Table.Cell>
						</Table.Row>
					) : null}

					{props.report.actions_taken !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Shift Start</Table.Cell>
							<Table.Cell>{props.report.actions_taken}</Table.Cell>
						</Table.Row>
					) : null}

					{props.report.actions_implemented !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Work Arrangment</Table.Cell>
							<Table.Cell>{props.report.actions_implemented}</Table.Cell>
						</Table.Row>
					) : null}
					{props.report.actions_implementer !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Work Arrangment</Table.Cell>
							<Table.Cell>{props.report.actions_implementer}</Table.Cell>
						</Table.Row>
					) : null}
					{props.report.review_date !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Work Arrangment</Table.Cell>
							<Table.Cell>{props.report.review_date}</Table.Cell>
						</Table.Row>
					) : null}
				</Table.Body>
			</Table>
		</>
	);
};

export default IncidentInvestigation;
