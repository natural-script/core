import React from "react";
import basicComponent from "core/basicComponent";
import { Router, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as Material from "@material-ui/core";
import * as declarations from "core/declarations";
import mergeAdvanced from "object-merge-advanced";
import Radium from "radium";
import history from "core/history";
class router extends basicComponent {
	constructor(props) {
		super(props);
		if (!this.isRestored) {
			const specialState = { routes: [] };
			this.state = mergeAdvanced(specialState, this.state);
		}
		this.myRef = React.createRef();
	}
	render() {
		const state = this.getState();
		return (
			<Router history={history}>
				<div>
					{state.children}
					{this.state.routes.map(route => (
						<Route
							key={route.name}
							exact
							path={route.path}
							render={() => (
								<>
									<Helmet>
										<title>
											{declarations.title +
												" | " +
												route.name
													.replace(/[_]/g, " ")
													.replace(/\w\S*/g, function(txt) {
														return (
															txt.charAt(0).toUpperCase() +
															txt.substr(1).toLowerCase()
														);
													})}
										</title>
									</Helmet>
									<Material.Paper {...route.containerProps}>
										{route.children}
									</Material.Paper>
								</>
							)}
						/>
					))}
				</div>
			</Router>
		);
	}
}

export default Radium(router);
