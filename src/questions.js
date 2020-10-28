const questions = {
	staff_details: [
		{
			name: "staff_name",
			text: "Name",
			type: "text",
		},
		{
			name: "staff_email",
			text: "Email",
			type: "email",
		},
		{
			name: "staff_phone",
			text: "Phone",
			type: "tel",
		},
		{
			name: "staff_experience",
			text: "Experience in job",
			type: "text",
		},
		{
			name: "staff_shift_start",
			text: "Shift start time",
			type: "time",
		},
		{
			name: "staff_work_arrangement",
			text: "Work arrangement",
			type: "select",
			options: [
				{ text: "Full time", value: "Full Time" },
				{ text: "Part time", value: "Part Time" },
				{ text: "Casual", value: "Casual" },
			],
		},
	],
	incident_details: [
		{
			name: "incident_time",
			text: "Time of incident",
			type: "time",
		},
		{
			name: "incident_location",
			text: "Incident location",
			type: "text",
		},
		{
			name: "incident_details",
			text: "Incident details (what happened)",
			type: "textarea",
		},
		{
			name: "incident_witnesses",
			text: "Incident witnesses",
			type: "textarea",
		},
		{
			name: "SWMS_completed",
			text: "SWMS completed",
			type: "checkbox",
		},
		{
			name: "take5_completed",
			text: "Take 5 completed",
			type: "checkbox",
		},
		{
			name: "fatigue_plan_completed",
			text: "Fatigue plan completed",
			type: "checkbox",
		},
		{
			name: "site_procedures_followed",
			text: "Site specific procedures followed",
			type: "checkbox",
		},
		{
			name: "incident_injury",
			text: "Incident injury",
			type: "checkbox",
		},
		{
			name: "incident_equip_damage",
			text: "Incident equipment damage",
			type: "checkbox",
		},
		{
			name: "incident_near_miss",
			text: "Incident Near Miss",
			type: "checkbox",
		},
	],

	injury_details: [
		{
			name: "injury_nature",
			text: "Nature of injury",
			type: "text",
		},
		{
			name: "injury_location",
			text: "injury location",
			type: "text",
		},
		{
			name: "injury_agency",
			text: "injury agency",
			type: "text",
		},
		{
			name: "stopped_work",
			text: "Stopped work",
			type: "checkbox",
		},
		{
			name: "treatment_received",
			text: "Treatment details",
			type: "checkbox",
		},
	],
	equip_damage_details: [
		{
			name: "equip_company",
			text: "Company of damaged equipment",
			type: "text",
		},
		{
			name: "equip_item",
			text: "equipment item/s",
			type: "text",
		},
		{
			name: "equip_damage",
			text: "Details of damage to equipment",
			type: "text",
		},
	],
	incident_investigation: [
		{
			name: "causal_factors",
			text: "Causal factors",
			type: "textarea",
		},
		{
			name: "recurrence_liklihood",
			text: "Liklhood of recurrence",
			type: "text",
		},
		{
			name: "outcome_severity",
			text: "Outcome severity",
			type: "text",
		},
		{
			name: "resulting_risk",
			text: "Resulting risk",
			type: "text",
		},
		{
			name: "actions_taken",
			text: "Actions taken to mitigate risk",
			type: "textarea",
		},
		{
			name: "actions_implemented",
			text: "Action implented on",
			type: "date",
		},
		{
			name: "actions_implementer",
			text: "By whom",
			type: "text",
		},
	],
};

export default questions;
