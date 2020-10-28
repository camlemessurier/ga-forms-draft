import React from "react";
import { Table } from "semantic-ui-react";
//import ReportField from "./ReportField";

// props: report object , section questions array
const ReportSection = (props) => {
	const match = (question) => {
		for (const field in props.report) {
			if (field === question.name) {
				console.log(field);
				return props.report[field];
			} else {
				console.log("not found");
			}
		}
	};
	return (
		<>
			<Table definition>
				<Table.Body>
					{props.section.map((question) => {
						return (
							<Table.Row>
								<Table.Cell width={4}>{question.text}</Table.Cell>
								<Table.Cell>{match(question)}</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table>
		</>
	);
};

export default ReportSection;
