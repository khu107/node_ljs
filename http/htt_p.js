const http = require('http');

// createServer uzini ichiga bitta callback functia qabul qiladi
const server = http.createServer((request, response) => {
  // request - serverga surov
  // response - serverdan javob

  console.log(request.url);

  response.write(`<h1>salom</h1>`);
  response.end();
});

// serverni kuzatib turrish
server.listen(3000, () => {
  console.log('port 3000');
});
