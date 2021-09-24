const express = require("express");
const app = express();
const port = 8888;

// app.METHOD(PATH, HANDLER);

app.get("/", (req, res) => {
	const data = {
		name: "Brandon",
		isAwesome: true,
	};

	res.json(data);
});

app.get("/awesome-generator", (req, res) => {
	const { name, isAwesome } = req.query;
	res.send(`${name} is ${JSON.parse(isAwesome) ? "really" : "not"} awesome`);
});

app.listen(port, () => {
	console.log(`Express app listening at http://localhost:${port}`);
});
