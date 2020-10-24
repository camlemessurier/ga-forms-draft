import axios from "axios";

const sendReport = (
	staff_name,
	staff_email,
	staff_phone,
	staff_work_arrangement,
	staff_experience,
	staff_shift_start,

	//

	incident_title,
	incident_time,
	incident_location,
	incident_details,
	incident_witnesses,
	SWMS_completed,
	take5_completed,
	fatigue_plan_completed,
	site_procedures_followed,
	incident_injury,
	incident_equip_damage,
	incident_near_miss,

	//

	injury_nature,
	injury_location,
	injury_agency,
	stopped_work,
	treatment_received,
	treatment_details,

	//

	equip_company,
	equip_item,
	equip_damage,

	//

	causal_factors,
	recurrence_liklihood,
	outcome_severity,
	resulting_risk,
	actions_taken,
	actions_implemented,
	actions_implementer
) => {
	axios
		.post("/sendReport", {
			staff_name,
			staff_email,
			staff_phone,
			staff_work_arrangement,
			staff_experience,
			staff_shift_start,

			//

			incident_title,
			incident_time,
			incident_location,
			incident_details,
			incident_witnesses,
			SWMS_completed,
			take5_completed,
			fatigue_plan_completed,
			site_procedures_followed,
			incident_injury,
			incident_equip_damage,
			incident_near_miss,

			//

			injury_nature,
			injury_location,
			injury_agency,
			stopped_work,
			treatment_received,
			treatment_details,

			//

			equip_company,
			equip_item,
			equip_damage,

			//

			causal_factors,
			recurrence_liklihood,
			outcome_severity,
			resulting_risk,
			actions_taken,
			actions_implemented,
			actions_implementer,
		})
		.catch((err) => console.log(err));
};

export default sendReport;
