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

const InjuryDetails = (props) => {
	return (
		<>
			<Divider horizontal>
				<Header as="h4">Injury Details</Header>
			</Divider>
			<Table definition>
				<Table.Body>
					{props.report.injury_location !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Injury Location</Table.Cell>
							<Table.Cell>{props.report.injury_location}</Table.Cell>
						</Table.Row>
					) : null}

					{props.report.injury_nature !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Injury Nature</Table.Cell>
							<Table.Cell>{props.report.injury_nature}</Table.Cell>
						</Table.Row>
					) : null}

					{props.report.injury_agency !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Injury agency</Table.Cell>
							<Table.Cell>{props.report.injury_agency}</Table.Cell>
						</Table.Row>
					) : null}

					{props.report.stopped_work !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Staff stopped Work</Table.Cell>
							<Table.Cell>{props.report.stopped_work}</Table.Cell>
						</Table.Row>
					) : null}

					{props.report.treatment_received !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Treatment recieved</Table.Cell>
							<Table.Cell>{props.report.treatment_received}</Table.Cell>
						</Table.Row>
					) : null}

					{props.report.treatment_date !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Treatment Date</Table.Cell>
							<Table.Cell>{props.report.treatment_date}</Table.Cell>
						</Table.Row>
					) : null}
				</Table.Body>
			</Table>
		</>
	);
};

export default InjuryDetails;
