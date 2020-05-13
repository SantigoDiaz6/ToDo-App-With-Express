const express = require("express");
const cors = require("cors");
const uuid = require("uuid-random");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

app.get("/", (req, res) => {
	res.status(200).json(tasks);
});

app.post("/", (req, res) => {
	const task = { ...req.body, id: uuid() };
	tasks.push(task);
	res.status(200).json(task);
});

app.get("/:id", (req, res) => {
	const id = req.params.id;
	const task = tasks.filter((task) => task.id === id)[0];

	if (task) {
		res.status(200).json(task);
	} else {
		res.status(404);
	}
});

app.put("/:id", (req, res) => {
	const id = req.params.id;
	let changeTask;
	tasks.forEach((task, i) => {
		if (task.id === id) {
			changeTask = {
				...task,
				...req.body,
			};
			tasks[i] = changeTask;
		}
	});
	res.status(200).json(changeTask);
});

app.delete("/:id", (req, res) => {
	const id = req.params.id;

	tasks = tasks.filter((task) => task.id !== id);
	res.sendStatus(200);
});
app.listen(3000, () => console.log("App Listen on port 3000"));
