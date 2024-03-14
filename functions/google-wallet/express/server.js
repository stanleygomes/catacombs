const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { createButton } = require("./passService");
const port = 4000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send('Server UP!');
});

app.post("/create", async (req, res) => {
  const email = req.body.email;
  const button = await createButton(email);
  res.send(button)
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}/`);
});
