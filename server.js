const express = require("express");
const app = express();

app.use(express.json());

let Data = {
  1: { name: "abc", lname: "def" },
  2: { name: "ghi", lname: "jkl" },
  3: { name: "mno", lname: "pqr" },
  4: { name: "stu", lname: "vwxyz" },
};

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express js server" });
});

app.get("/data", (req, res) => {
  res.json(Data);
});

app.get("/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (Data[id]) {
    res.json(Data[id]);
  } else {
    res.json({ message: `no data exist with id ${id}` });
  }
});

app.post("/data", (req, res) => {
  const id = parseInt(req.body.id);
  const { name, lname } = req.body;
  if (Data[id]) {
    res.json({ message: `data exist with id ${id}` });
  } else {
    Data[id] = { name: name, lname: lname };
    res.json(Data);
  }
});

app.patch("/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const name = req.body.name;
  if (Data[id]) {
    Data[id][name] = name;
    res.json(Data[id]);
  } else {
    res.json({ message: `no data exist with id ${id}` });
  }
});

app.put("/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, lname } = req.body;
  if (Data[id]) {
    Data[id][name] = name;
    Data[id][lname] = lname;
    res.json(Data[id]);
  } else {
    res.json({ message: `no data exist with id ${id}` });
  }
});

app.delete("/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (Data[id]) {
    delete Data[id];
    res.json(Data);
  } else {
    res.json({ message: `no data exist with id ${id}` });
  }
});

app.listen(3000, () => console.log("running on port 3000"));
