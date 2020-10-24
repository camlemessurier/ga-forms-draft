import React, { useState, useEffect } from "react";
import { Form, Container, Header, Button } from "semantic-ui-react";
import sendReport from "../util/sendReport";

// Components
import IncidentDetailsForm from "./IncidentDetailsForm";
import StaffDetailsForm from "./StaffDetailsForm";
import InjuryDetailsForm from "./InjuryDetailsForm";
import EquipDamageForm from "./EquipDamageForm";
import IncidentInvestigationForm from "./IncidentInvestigationForm";

const ReportForm = (props) => {
	const [showInjury, set_showInjury] = useState(false);
	const [showEquipDamage, set_showEquipDamage] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		sendReport(
			formData.get("staff_name"),
			formData.get("staff_email"),
			formData.get("staff_phone"),
			formData.get("staff_work_arrangement"),
			formData.get("staff_experience"),
			formData.get("staff_shift_start"),
			formData.get("incident_title"),
			formData.get("incident_location"),
			formData.get("incident_details"),
			formData.get("incident_witnesses"),
			formData.get("SWMS_completed"),
			formData.get("take5_completed"),
			formData.get("fatigue_plan_completed"),
			formData.get("site_procedures_followed"),
			formData.get("incident_injury"),
			formData.get("incident_equip_damage"),
			formData.get("injury_nature"),
			formData.get("injury_location"),
			formData.get("injury_agency"),
			formData.get("stopped_work"),
			formData.get("treatment_recieved"),
			formData.get("treatment_details"),
			formData.get("equip_company"),
			formData.get("equip_item"),
			formData.get("equip_damage_details"),
			formData.get("causal_factors"),
			formData.get("recurrence_liklihood"),
			formData.get("outcome_severity"),
			formData.get("actions_taken"),
			formData.get("actions_implemented"),
			formData.get("actions_implementer")
		);
		props.history.push("/");
	};

	return (
		<Container text style={{ margin: "3em" }}>
			<Form onSubmit={handleSubmit}>
				<StaffDetailsForm />
				<IncidentDetailsForm />

				<Form.Group grouped>
					<label>Outcome of incident</label>
					<Form.Checkbox
						label="Injury"
						name="incident_injury"
						onChange={() => {
							set_showInjury(!showInjury);
						}}
					/>
					<Form.Checkbox
						label="Equipment Damage"
						name="incident_equip_damage"
						onChange={() => {
							set_showEquipDamage(!showEquipDamage);
						}}
					/>
					<Form.Checkbox label="Near Miss" name="incident_near_miss" />
				</Form.Group>
				{showInjury && <InjuryDetailsForm />}
				{showEquipDamage && <EquipDamageForm />}

				<IncidentInvestigationForm />

				<Container style={{ textAlign: "center" }} text>
					<Button type="submit">Submit</Button>
				</Container>
			</Form>
		</Container>
	);
};

export default ReportForm;
