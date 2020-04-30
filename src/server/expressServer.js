const express = require('express');
const path = require('path');

/*-----------------------------------------------------------------*/

const server = express();

server.listen(3000, function serviceStart() {
  console.log('Server is listening');
});
