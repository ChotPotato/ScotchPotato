const keyMirror = require('react/lib/keyMirror');

module.exports = {

  ActionTypes: keyMirror({
    ADD_TASK: null,
    GET_ROOMS: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
