import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Edit from "./pages/Edit";
import Create from "./pages/Create";
import Delete from "./pages/Delete";
// import Form from "./components/Form";

function App() {
	return (
		<div className="App">
			<Router>
				<Link to="/">Home</Link>
				<Link to="/create"> Create Task </Link>

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/create" component={Create} />
					<Route exact path="/:id" component={Details} />
					<Route exact path="/update/:id" component={Edit} />
					<Route exact path="/delete/:id" component={Delete} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
