import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import AppBar from "./components/AppBar";
import ReportForm from "./components/ReportForm";

const App = () => {
	return (
		<div className="App">
			<Router>
				<AppBar />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/new" component={ReportForm} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
