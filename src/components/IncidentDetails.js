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

const IncidentDetails = (props) => {
	return (
		<>
			<Divider horizontal>
				<Header as="h4">Incident Details</Header>
			</Divider>
			<Table definition>
				<Table.Body>
					{props.report.incident_time !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Incident</Table.Cell>
							<Table.Cell>{props.report.incident_time}</Table.Cell>
						</Table.Row>
					) : null}

					{props.report.incident_location !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Email</Table.Cell>
							<Table.Cell>{props.report.incident_location}</Table.Cell>
						</Table.Row>
					) : null}

					{props.report.incident_details !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Phone</Table.Cell>
							<Table.Cell>{props.report.incident_details}</Table.Cell>
						</Table.Row>
					) : null}

					{props.report.staff_experience !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Staff experience</Table.Cell>
							<Table.Cell>{props.report.staff_experience}</Table.Cell>
						</Table.Row>
					) : null}

					{props.report.staff_shift_start !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Shift Start</Table.Cell>
							<Table.Cell>{props.report.staff_shift_start}</Table.Cell>
						</Table.Row>
					) : null}

					{props.report.staff_work_arrangement !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Work Arrangment</Table.Cell>
							<Table.Cell>{props.report.staff_work_arrangement}</Table.Cell>
						</Table.Row>
					) : null}
				</Table.Body>
			</Table>
		</>
	);
};

export default IncidentDetails;
