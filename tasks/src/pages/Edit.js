import React from "react";
import axios from "axios";
import Form from "../components/Form";

class Edit extends React.Component {
	state = {
		title: "",
		description: "",
		done: false,
		loading: true,
	};

	componentDidMount() {
		axios({
			method: "GET",
			baseURL: "http://localhost:3000",
			url: `/${this.props.match.params.id}`,
			header: {
				"Content-Type": "application/json",
			},
		}).then(({ data: { title, description, done } }) =>
			this.setState({ title, description, done, loading: false })
		);
	}

	handleChange = (e) => {
		let checkers = ["done"];
		let value = 
		checkers.includes(e.target.name) ? e.target.checked : e.target.value;
		const { name } = e.target;
		this.setState({ [name]: value });
		// console.log(e.target.value);
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { loading, ...data } = this.state;

		axios({
			method: "PUT",
			baseURL: "http://localhost:3000",
			url: `/${this.props.match.params.id}`,
			data,
			headers: {
				"Content-Type": "application/json",
			},
		}).then(() => this.props.history.push("/"));
	};

	render() {
		return (
			<Form
				title={this.state.title}
				description={this.state.description}
				done={this.state.done}
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
				updating={true}
			/>
		);
	}
}

export default Edit;
