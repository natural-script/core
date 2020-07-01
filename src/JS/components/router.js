import React, {useState, useImperativeHandle} from "react";
import { Helmet } from "react-helmet";
import * as Material from "@material-ui/core";
import * as declarations from "core/declarations";
import {useRoutes} from 'hookrouter';

function Router (props, ref) {
	const [routes, setRoutes] = useState("{}")
	useImperativeHandle(ref, () => ({
		setRoutes: (route) => setRoutes({[route.path]: () => (<>
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
		</>)})
	}))
	const routeResult = useRoutes(routes);
	return routeResult;
  }
  export default React.forwardRef(Router)