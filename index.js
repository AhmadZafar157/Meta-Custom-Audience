const http = require('http');
const express = require('express');
const app = express();
const port = 3333;

const server = http.createServer(app);

server.listen(port, async () => {
  console.log(`Server running on port ${port}`);
});