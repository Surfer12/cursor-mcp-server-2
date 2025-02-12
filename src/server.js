// Placeholder server setup for Cursor MCP Server
const http = require('http');

const PORT = 3100;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Cursor MCP Server is running');
});

server.listen(PORT, () => {
  console.log(`Cursor MCP Server is running on http://localhost:${PORT}`);
});