const express = require("express");

const app = express();

app.use(express.static("build"));

app.post("/sendName", (req, res) => {
  console.log("NAME RECEIVED");
  console.log("saved to databse");

  res.send("NAME SENT");
});

app.listen(5000, () => {
  console.log("Example app listening on port 3000!");
});
