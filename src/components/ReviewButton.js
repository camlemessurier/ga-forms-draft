import React, { useState } from "react";
import { Icon, Menu, Button, Modal, Header, Form } from "semantic-ui-react";
import axios from "axios";

const ReviewButton = (props) => {
	const [open, setOpen] = useState(false);
	const [reviewer, setReviewer] = useState("");

	const handleReview = () => {
		axios.put(`/report/${props.report_id}/review`, { reviewer });
		window.location = "/";
	};

	return (
		<Modal
			basic
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			size="small"
			trigger={<Button icon="check" content="Review" />}
		>
			<Header icon>
				<Icon name="delete" />
				Review Report
			</Header>
			<Modal.Content>
				<Form>
					<Form.Field>
						<label>Please enter your name</label>
						<input
							required={true}
							onChange={(e) => {
								setReviewer(e.target.value);
							}}
						/>
					</Form.Field>
				</Form>
			</Modal.Content>
			<Modal.Actions>
				<Button basic color="red" inverted onClick={() => setOpen(false)}>
					<Icon name="remove" /> No
				</Button>
				<Button color="green" inverted onClick={handleReview}>
					<Icon name="checkmark" /> Yes
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

export default ReviewButton;
