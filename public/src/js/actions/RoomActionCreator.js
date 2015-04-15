const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const Rooms = require('../entities/Rooms');

module.exports = {

  findAll() {
    Rooms.get(data => {
      AppDispatcher.handleViewAction({
        type: Constants.ActionTypes.GET_ROOMS,
        data: data
      });
    });
  },

  create(room) {
    Rooms.create(room, (jwr) => {
      if(jwr.statusCode === 201) {
        console.log('success');

      }else{
        console.log('failure');
      }
    })
  }
};
