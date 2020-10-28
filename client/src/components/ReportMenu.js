import React from "react";
import { Button } from "semantic-ui-react";

import ReviewButton from "./ReviewButton";
import DeleteButton from "./DeleteButton";

const ReportMenu = (props) => {
	const handleBack = () => {
		window.location = "/";
	};

	const handleEdit = () => {
		window.location = `/report/${props.report.report_id}/edit`;
	};

	return (
		<>
			<Button icon="edit" onClick={handleEdit} content="Edit" />
			<Button icon="print" content="Print" />
			<ReviewButton icon="check" report_id={props.report.report_id} />
			<DeleteButton report_id={props.report.report_id} />
			<Button icon="arrow left" onClick={handleBack} content="Back" />
		</>
	);
};

export default ReportMenu;
