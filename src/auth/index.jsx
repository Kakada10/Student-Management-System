import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./login";

export default function Auth() {
	return (
		<Switch>
			<Route path="/login" component={Login} />
			<Redirect to="/login" />
		</Switch>
	);
}
