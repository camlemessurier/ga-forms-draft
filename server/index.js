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

app.post("/reports", (req, res) => {
	try {
		const {
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
		} = req.body;

		const newIncidentReportQuery = `INSERT INTO incident_reports (staff_name,staff_email,staff_phone,staff_work_arrangement,staff_experience,staff_shift_start,incident_title,incident_time,incident_location,incident_details,incident_witnesses,SWMS_completed,take5_completed,fatigue_plan_completed,site_procedures_followed,incident_injury,incident_equip_damage,incident_near_miss,injury_nature,injury_location,injury_agency,stopped_work,treatment_received,treatment_details,equip_company,equip_item,equip_damage,causal_factors,recurrence_liklihood,outcome_severity,resulting_risk,actions_taken,actions_implemented, actions_implementer) values ('${staff_name}', '${staff_email}','${staff_phone}', '${staff_work_arrangement}','${staff_experience}','${staff_shift_start}', '${incident_title}', '${incident_time}','${incident_location}','${incident_details}','${incident_witnesses}','${SWMS_completed}','${take5_completed}','${fatigue_plan_completed}','${site_procedures_followed}','${incident_injury}','${incident_equip_damage}','${incident_near_miss}','${injury_nature}','${injury_location}','${injury_agency}','${stopped_work}','${treatment_received}','${treatment_details}','${equip_company}','${equip_item}','${equip_damage}', '${causal_factors}', '${recurrence_liklihood}','${outcome_severity}','${resulting_risk}','${actions_taken}','${actions_implemented}','${actions_implementer}')`;

		pool.query(newIncidentReportQuery, (error, results, fields) => {
			if (error) throw error;
			res.json(results);
		});
	} catch (error) {
		console.log(error.message);
	}
});

// Get all todo
app.get("/reports", (req, res) => {
	try {
		pool.query("SELECT * FROM incident_reports", (err, result, fields) => {
			if (err) throw err;
			res.json(result);
		});
	} catch (error) {
		console.log(error.message);
	}
});

app.get("/reportsSum", (req, res) => {
	try {
		pool.query(
			"SELECT (report_title, report_date, review_date) FROM incident_reports",
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

// update a todo

app.put("/report/:id", (req, res) => {
	try {
		const { id } = req.params;
		const { person_name } = req.body;
		pool.query(
			`UPDATE incident_reports SET person_name = '${person_name}' WHERE report_id = ${id}`,
			(err, result, fields) => {
				if (err) throw err;
				res.json(result);
			}
		);
	} catch (error) {
		console.log(error.message);
	}
});

// delete a todo
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

// Server
app.listen(5000, () => {
	console.log("server has started on port 5000");
});
