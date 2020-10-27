const questions = {
	staff_details: [
		{
			name: "staff_name",
			text: "Name of staff member involved",
			type: "text",
		},
		{
			name: "staff_phone",
			text: "Staff members phone number",
			type: "select",
			options: [
				{ text: "male", value: "male" },
				{ text: "female", value: "female" },
			],
		},
		{
			name: "hello",
			text: "hello",
			type: "checkbox",
		},
		{
			name: "hello",
			text: "hello",
			type: "textarea",
		},
	],
	incident_details: [
		{
			name: "staff_name",
			text: "Name of staff member involved",
			type: "text",
		},
		{
			name: "staff_phone",
			text: "Staff members phone number",
			type: "text",
		},
		{
			name: "hello",
			text: "hello",
			type: "checkbox",
		},
		{
			name: "hello",
			text: "hello",
			type: "textarea",
		},
	],
};

export default questions;
