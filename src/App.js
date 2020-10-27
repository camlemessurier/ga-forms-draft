import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Message } from "semantic-ui-react";
import { connect } from "react-redux";
import ReportViewer from "./components/ReportViewer";

import Home from "./components/Home";
import AppBar from "./components/AppBar";
import ReportForm from "./components/ReportForm";
const axios = require("axios").default;
axios.defaults.baseURL = "http://localhost:5000";

const App = () => {
	return (
		<div className="App">
			<Router>
				<AppBar />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/new">
						<ReportForm className="form" />
					</Route>
					<Route
						exact
						path="/report/:report_id"
						component={ReportViewer}
					></Route>
					<Route
						exact
						path="/report/:report_id/edit"
						component={ReportForm}
					></Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
