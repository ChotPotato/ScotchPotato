const socketIoClient = require('socket.io-client');
const sailsIoClient = require('sails.io.js');

// Instantiate the socket client (`io`)
// (for now, you must explicitly pass in the socket.io client when using this library from Node.js)
const io = sailsIoClient(socketIoClient);
//url of model
const modelUrl = '/rooms';
// Set some options:
// (you have to specify the host and port of the Sails backend when using this library from Node.js)
io.sails.url = 'http://localhost:1337';



module.exports = {

  get(callback){
    // Send a GET request to `http://localhost:1337/hello`:
    io.socket.get(modelUrl, (body, jwr) => {
      // body === JWR.body
      console.log('Sails responded with: ', body);
      console.log('with headers: ', jwr.headers);
      console.log('and with status code: ', jwr.statusCode);


      // When you are finished with `io.socket`, or any other sockets you connect manually,
      // you should make sure and disconnect them, e.g.:
      callback(body);

      // (note that there is no callback argument to the `.disconnect` method)
    });
  },

  create(room, callback){
    io.socket.post(modelUrl, room, (body, jwr) => {
      console.log(jwr);
      callback(jwr);
    });
  }

};

