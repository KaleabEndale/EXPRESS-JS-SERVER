const express = require("express");
const app = express();

app.use(express.json());

let Data = [
  { id: 1, name: "kaleab", lname: "endale" },
  { id: 2, name: "gebrelwa", lname: "endale" },
  { id: 3, name: "hermela", lname: "endale" },
];

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express js server" });
});

app.get("/data", (req, res) => {
  res.json(Data);
});

app.listen(3000, () => console.log("running on port 3000"));
