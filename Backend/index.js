const express = require("express");
const app = express();

const signupRoute = require("./components/signup");
const loginRoute = require("./components/login");

app.use(express.json());

app.use("/signup", signupRoute);

app.get("/", (req, res) => {
  res.send("Welcome to BackEnd API!");
});

const port = 3737;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
