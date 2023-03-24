const express = require("express");
const app = express();
const path = require("path");

const port = 3000;
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.get("/api", (req, res) => {
  res.send("Api Call Successfully");
});

app.listen(port, () => {
  console.log(`Development Server run Successfully`);
});
