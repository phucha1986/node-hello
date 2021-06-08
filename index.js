const http = require('http');
const port = process.env.PORT || 4000;
const express = require('express');
const cors = require('cors');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Max-Age', 2592000); // 30 days  
 
  res.end(JSON.stringify({ status: 1, redirectURL: '' }));
  return;
 
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

// var corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200, // For legacy browser support
//   methods: "GET, PUT"
// }

// const app = express();
// // Add headers
// app.use(cors(corsOptions));

// app.get('/', cors(), (req, res) => {
//   res.json({
//       message: 'Hello World'
//   });
// });