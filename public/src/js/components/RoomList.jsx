const React = require('react');
const RoomStore = require('../stores/RoomStore');
const RoomActions = require('../actions/RoomActionCreator');
const PageHeader = require('react-bootstrap/lib/PageHeader');
const ListGroup = require('react-bootstrap/lib/ListGroup');
const Room = require('./Room.jsx');
const Router = require('react-router');
const Link = Router.Link;

let RoomList = React.createClass({
  getInitialState() {
    return {
      rooms: []
    };
  },

  componentDidMount() {
    RoomStore.addChangeListener(this._onChange);
    RoomActions.findAll();
  },

  componentWillUnmount() {
    RoomStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState(RoomStore.getAll());
  },

  render() {
    let rooms = this.state.rooms.map(room => <Room room={room} />);
    return (
      <div className="container">
        <PageHeader>Room List! <small>The Scots have rooms!!!</small></PageHeader>
        <ListGroup>
          {rooms}
        </ListGroup>
        <Link className="btn btn-primary" to="newroom">Create Room</Link>
      </div>
    );
  }
});

module.exports = RoomList;
