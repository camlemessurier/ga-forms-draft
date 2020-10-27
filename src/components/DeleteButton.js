import React, { useState } from "react";
import { Icon, Menu, Button, Modal, Header, Form } from "semantic-ui-react";
import axios from "axios";

const DeleteButton = (props) => {
	const [open, setOpen] = useState(false);

	const handleDelete = () => {
		axios.delete(`report/${props.report_id}`);
		console.log("handle delete");
		window.location = "/";
	};

	return (
		<Modal
			basic
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			size="small"
			trigger={<Button icon="delete" content="Delete" />}
		>
			<Header icon>
				<Icon name="delete" />
				Delete report
			</Header>
			<Modal.Content>
				<p>Are you sure you want to delete this incident report?</p>
			</Modal.Content>
			<Modal.Actions>
				<Button basic color="red" inverted onClick={() => setOpen(false)}>
					<Icon name="remove" /> No
				</Button>
				<Button color="green" inverted onClick={handleDelete}>
					<Icon name="checkmark" /> Yes
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

export default DeleteButton;
