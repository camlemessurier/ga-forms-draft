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

const StaffDetails = (props) => {
	return (
		<>
			{console.log(props.report)}
			<Divider horizontal>
				<Header as="h4">Staff Details</Header>
			</Divider>
			<Table definition>
				<Table.Body>
					{props.report.staff_name !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Name</Table.Cell>
							<Table.Cell>{props.report.staff_name}</Table.Cell>
						</Table.Row>
					) : null}

					{props.report.staff_email !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Email</Table.Cell>
							<Table.Cell>{props.report.staff_email}</Table.Cell>
						</Table.Row>
					) : null}

					{props.report.staff_phone !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Phone</Table.Cell>
							<Table.Cell>{props.report.staff_phone}</Table.Cell>
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

export default StaffDetails;
