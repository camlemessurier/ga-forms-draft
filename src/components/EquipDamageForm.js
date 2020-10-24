import React from "react";
import { Form, Header } from "semantic-ui-react";

const EquipDamageForm = () => {
	return (
		<>
			<Header as="h2"> Equipment Damage Details</Header>
			<Form.Field>
				<label>Equipment Company</label>
				<input name="equip_company" placeholder="Equipment Company" />
			</Form.Field>
			<Form.Field>
				<label>Equipment</label>
				<input name="equip_item" placeholder="GA7, NA28 White Mix 1, etc" />
			</Form.Field>
			<Form.Field>
				<label>Equipment Damage Detail</label>
				<textarea name="equip_damage_details" />
			</Form.Field>
		</>
	);
};

export default EquipDamageForm;
