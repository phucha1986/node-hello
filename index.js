const http = require('http');
const port = process.env.PORT || 8080;

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
