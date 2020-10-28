const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./dbConfig");
var util = require("util");
const bodyParser = require("body-parser");

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/report", (req, res) => {
	// Initialising variables
	const report_date = new Date().toLocaleString();
	const review_date = "undefined";
	const isReviewed = "false";
	console.log(req.body);
	// returns undefined if field empty, better way?
	const {
		staff_name,
		staff_email,
		staff_phone,
		staff_work_arrangement,
		staff_experience,
		staff_shift_start,
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
		injury_nature,
		injury_location,
		injury_agency,
		stopped_work,
		treatment_received,
		treatment_details,
		equip_company,
		equip_item,
		equip_damage,
		causal_factors,
		recurrence_liklihood,
		outcome_severity,
		resulting_risk,
		actions_taken,
		actions_implemented,
		actions_implementer,
	} = req.body;

	const newIncidentReportQuery = `INSERT INTO incident_reports (report_date, staff_name,staff_email,staff_phone,staff_work_arrangement,staff_experience,staff_shift_start,incident_time,incident_location,incident_details,incident_witnesses,SWMS_completed,take5_completed,fatigue_plan_completed,site_procedures_followed,incident_injury,incident_equip_damage,incident_near_miss,injury_nature,injury_location,injury_agency,stopped_work,treatment_received,treatment_details,equip_company,equip_item,equip_damage,causal_factors,recurrence_liklihood,outcome_severity,resulting_risk,actions_taken,actions_implemented, actions_implementer, review_date, isReviewed) values ('${report_date}', '${staff_name}', '${staff_email}','${staff_phone}', '${staff_work_arrangement}','${staff_experience}','${staff_shift_start}', '${incident_time}','${incident_location}','${incident_details}','${incident_witnesses}','${SWMS_completed}','${take5_completed}','${fatigue_plan_completed}','${site_procedures_followed}','${incident_injury}','${incident_equip_damage}','${incident_near_miss}','${injury_nature}','${injury_location}','${injury_agency}','${stopped_work}','${treatment_received}','${treatment_details}','${equip_company}','${equip_item}','${equip_damage}', '${causal_factors}', '${recurrence_liklihood}','${outcome_severity}','${resulting_risk}','${actions_taken}','${actions_implemented}','${actions_implementer}', '${review_date}', '${isReviewed}')`;

	pool.query(newIncidentReportQuery, (error, results, fields) => {
		if (error) throw error;
		res.json(results);
	});
});

app.get("/reportsSum", (req, res) => {
	try {
		pool.query(
			"SELECT report_id, staff_name, report_date, incident_details, isReviewed FROM incident_reports ORDER BY report_date DESC",
			(err, result, fields) => {
				if (err) throw err;
				res.json(result);
			}
		);
	} catch (error) {
		console.log(error.message);
	}
});

app.get("/report/:report_id", (req, res) => {
	try {
		const { report_id } = req.params;
		if (report_id === "undefined") {
			throw error;
		}
		pool.query(
			`SELECT * FROM incident_reports WHERE report_id = ${report_id}`,
			(err, result, fields) => {
				if (err) throw err;
				res.json(result[0]);
			}
		);
	} catch (error) {
		console.log(error.message);
	}
});

app.put("/report/:report_id/review", (req, res) => {
	try {
		const { report_id } = req.params;
		const { reviewer } = req.body;
		const review_date = new Date().toLocaleString();
		const isReviewed = "true";
		pool.query(
			`UPDATE incident_reports SET reviewer = '${reviewer}', review_date = '${review_date}', isReviewed = '${isReviewed}' WHERE report_id = ${report_id}`,
			(err, result, fields) => {
				if (err) throw err;
				res.json(result);
			}
		);
	} catch (error) {
		console.log(error);
	}
});

app.delete("/report/:id", (req, res) => {
	try {
		const { id } = req.params;
		pool.query(
			`DELETE FROM incident_reports WHERE report_id = ${id}`,
			(err, result, fields) => {
				if (err) throw err;
				res.json(result);
			}
		);
	} catch (error) {
		console.log(error);
	}
});

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
	console.log(
		`App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`
	);
});
