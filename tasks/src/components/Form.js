import React from "react";

function Form({
	title,
	description,
	done,
	handleChange,
	handleSubmit,
	updating,
	deleting = false,
}) {
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="title"> Title</label>
			<input
				type="text"
				name="title"
				id="title"
				onChange={handleChange}
				value={title}
			/>
			<label htmlFor="description">Description</label>
			<input
				type="text"
				name="description"
				id="description"
				onChange={handleChange}
				value={description}
			/>
			<input
				type="checkbox"
				onChange={handleChange}
				checked={done}
				name="done"
				id="done"
			/>
			{deleting? <button type="submit">{"Delete"} task</button> : <button type="submit">{updating ? "Update" : "Create"} task</button>}
		</form>
	);
}

export default Form;
