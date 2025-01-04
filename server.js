// Import the http module
const http = require('http');

// Define the hostname and port
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header
  res.statusCode = 200; // Status code 200 means OK
  res.setHeader('Content-Type', 'text/plain');
  
  // Send a response
  res.end('Hello, World!\n');
});

// Make the server listen on the specified port and hostname
server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
