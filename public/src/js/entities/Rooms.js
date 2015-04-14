const socketIoClient = require('socket.io-client');
const sailsIoClient = require('sails.io.js');

// Instantiate the socket client (`io`)
// (for now, you must explicitly pass in the socket.io client when using this library from Node.js)
const io = sailsIoClient(socketIoClient);

// Set some options:
// (you have to specify the host and port of the Sails backend when using this library from Node.js)
io.sails.url = 'http://localhost:1337';


module.exports = {

  get(callback){
    // Send a GET request to `http://localhost:1337/hello`:
    io.socket.get('/rooms', function roomSocketResponse (body, JWR) {
      // body === JWR.body
      console.log('Sails responded with: ', body);
      console.log('with headers: ', JWR.headers);
      console.log('and with status code: ', JWR.statusCode);


      // When you are finished with `io.socket`, or any other sockets you connect manually,
      // you should make sure and disconnect them, e.g.:
      callback(body);

      // (note that there is no callback argument to the `.disconnect` method)
    });
  }

}

