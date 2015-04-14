const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');

// data storage
let _data = [];

// add private functions to modify data
function setData(data) {
  _data = data;
}

// Facebook style store creation.
let RoomStore = assign({}, BaseStore, {

  // public methods used by Controller-View to operate on data
  getAll() {
    return {
      rooms: _data
    };
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.GET_ROOMS:
        // NOTE: if this action needs to wait on another store:
        // AppDispatcher.waitFor([OtherStore.dispatchToken]);
        // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
        setData(action.data);
        RoomStore.emitChange();
        break;

      // add more cases for other actionTypes...
    }
  })

});

module.exports = RoomStore;
