const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.sendFile("public/login.html", { root: __dirname });
});

app.get("/info", (req, res) => {
  res.sendFile("public/info.html", { root: __dirname });
});

app.get("/calculate", (req, res) => {
  res.sendFile("public/cal.html", { root: __dirname });
});

app.get("/research", (req, res) => {
  res.sendFile("public/re.html", { root: __dirname });
});

app.get("/management", (req, res) => {
  res.sendFile("public/manag.html", { root: __dirname });
});

app.get("/home", (req, res) => {
  res.sendFile("public/menu.html", { root: __dirname });
});

app.get("/research/submit", (req, res) => {
  res.sendFile("public/resub.html", { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
