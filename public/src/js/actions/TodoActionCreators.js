const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const Rooms = require('../entities/Rooms');

module.exports = {

  addItem: function(text) {
    Rooms.get();
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.ADD_TASK,
      text: text
    });
  },

  clearList: function() {
    console.warn('clearList action not yet implemented...');
  },

  completeTask: function(task) {
    console.warn('completeTask action not yet implemented...');
  }

};
