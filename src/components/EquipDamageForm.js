import React from "react";
import { Form, Header } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";

const renderTextArea = (field) => (
	<Form.TextArea
		{...field.input}
		label={field.label}
		placeholder={field.placeholder}
	/>
);

const EquipDamageForm = () => {
	return (
		<>
			<Header as="h2"> Equipment Damage Details</Header>

			<Field
				component={renderTextArea}
				label="Company of equipment"
				name="equip_company"
				placeholder="Company of equipment"
			/>
			<Field
				component={Form.Input}
				label="Equipment Items"
				name="equip_item"
				placeholder="Equipment Items"
			/>
			<Field
				component={renderTextArea}
				label="Equipment damage detail"
				name="equip_damage"
				placeholder="Equipment damage detail"
			/>
		</>
	);
};

export default reduxForm({
	form: "report",
})(EquipDamageForm);
