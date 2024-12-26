const express = require("express");
const cors = require("cors");
//const fs = require("fs");
const http = require("http");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());

// const key = fs.readFileSync('localhost-key.pem', 'utf8');
// const cert = fs.readFileSync('localhost.pem', 'utf8');
// const options = { key, cert };

const signupRoute = require("./components/signup");
const loginRoute = require("./components/login");
app.use(express.json());
console.log("connecting");

app.use(cors({
  origin: 'http://foodtube.me', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Include credentials if needed
}));

http.createServer(app).listen(port, () => {
  console.log(`Server is running on port 3000`);
});

app.use("/", loginRoute);
app.use("/", signupRoute);

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
// This is to test for 404 error

//This is to test for listening to the port

app.get('/', (req, res) => {
  res.send('Hello, HTTPS world!');
});
app.get('/login', (req, res) => {
  res.send('Hello,Login world!');
});