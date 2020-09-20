const express = require("express");
const app = express();

app.get("/login", (req, res) => {
  res.json({
    Name: "Sujan Basnet",
    Age: 20,
  });
});
app.get("/signup", (req, res) => {
  res.send("OK");
});
app.get("/signout", (req, res) => {
  res.send("THis is a signout route");
});
app.get("/hitesh", (req, res) => {
  res.send("HItesh is in instagram");
});
const port = 3000;
app.listen(port, () => {
  console.log(`App  is listeneing on port 3000`);
});
