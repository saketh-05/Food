const express = require("express");
const app = express();
app.use(express.json());
const signupRoute = require("./components/signup");
const loginRoute = require("./components/login");

app.use(express.json());
console.log("connecting");
app.use("/signup", signupRoute);
app.use("/login", loginRoute);

//to make things work correctly test route is added
app.post('/test',async (req, res) => {
  console.log(`Headers:`, req.headers);
  console.log(`Body:`, req.body);
  console.log("Test route works!");
  res.send("Test route works!");
});
app.get('/test',(req, res) => {
  console.log(`Headers:`, req.headers);
  console.log(`Body:`, req.body);
  console.log("Test route works!");
  res.send("Test route works!");
});
//Logging the requests for debugging
// app.use((req, res, next) => {
//   console.log(`Incoming request: ${req.method} ${req.url}`);
//   console.log(`Headers:`, req.headers);
//   console.log(`Body:`, req.body);
//   res.send("Request logged");
//   next();
// });
//This is to test for 404 error
// app.use((req, res, next) => {
//   res.status(404).send(`Route not found: ${req.originalUrl}`);
// });

//This is to test for listening to the port
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
