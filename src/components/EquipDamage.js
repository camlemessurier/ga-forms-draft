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

const EquipDamage = (props) => {
	return (
		<>
			<Divider horizontal>
				<Header as="h4">Equipment Damage</Header>
			</Divider>
			<Table definition>
				<Table.Body>
					{props.report.equip_company !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Incident</Table.Cell>
							<Table.Cell>{props.report.equip_company}</Table.Cell>
						</Table.Row>
					) : null}

					{props.report.equip_item !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Email</Table.Cell>
							<Table.Cell>{props.report.equip_item}</Table.Cell>
						</Table.Row>
					) : null}

					{props.report.equip_damage !== "undefined" ? (
						<Table.Row>
							<Table.Cell width={2}>Phone</Table.Cell>
							<Table.Cell>{props.report.equip_damage}</Table.Cell>
						</Table.Row>
					) : null}
				</Table.Body>
			</Table>
		</>
	);
};

export default EquipDamage;
