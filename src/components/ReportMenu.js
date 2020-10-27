import React, { Component, useState } from "react";
import { Icon, Menu, Button, Modal, Header, Form } from "semantic-ui-react";
import axios from "axios";

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
			<Button.Group labeled icon>
				<Button icon="edit" onClick={handleEdit}>
					Edit
				</Button>
				<Button>Print</Button>
				<ReviewButton report_id={props.report.report_id} />
				<DeleteButton report_id={props.report.report_id} />
				<Button icon="arrow left" onClick={handleBack} content="Back" />
			</Button.Group>
		</>
	);
};

export default ReportMenu;
