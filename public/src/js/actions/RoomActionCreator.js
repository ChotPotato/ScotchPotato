const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const Rooms = require('../entities/Rooms');

module.exports = {

  findAll: function() {
    Rooms.get(data => {
      AppDispatcher.handleViewAction({
        type: Constants.ActionTypes.GET_ROOMS,
        data: data
      });
    });
  }
};
