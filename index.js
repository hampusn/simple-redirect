const { createServer } = require('http');
const { PORT = 5000, STATUS = 301, REDIRECT_URL = '' } = process.env;
const server = createServer(({ url }, res) => {
  res
    .writeHead(STATUS, {
      'Location': `${REDIRECT_URL.replace(/\/$/, '')}${url}`
    })
    .end();
});

server.listen(PORT, () => {
  console.log("Server listening on port: %s", PORT);
});