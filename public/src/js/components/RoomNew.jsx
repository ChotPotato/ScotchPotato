const React = require('react');
const Router = require('react-router');
const Input = require('react-bootstrap/lib/Input');
const PageHeader = require('react-bootstrap/lib/PageHeader');
const Button = require('react-bootstrap/lib/Button');
const Link = Router.Link;
const RoomActions = require('../actions/RoomActionCreator');

let RoomNew = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState() {
    return {
      room: {
        name: ""
      }
    };
  },

  handleChange: function(event) {
    this.setState({
      room: {
        name: event.target.value
      }
    });
  },

  createRoom() {
    console.log(this.state.room);
    RoomActions.create(this.state.room)
    this.context.router.transitionTo('app');
  },

  render() {
    let {room} = this.state;
    return (
      <div className="container">
        <PageHeader>Create a new Room! <small>The Scots will get prepared for some exiting trivia!</small></PageHeader>
        <Input type='text' label='Room Name' placeholder='Please Enter Room Name.' value={room.name} onChange={this.handleChange}/>
        <Button bsStyle="success" onClick={this.createRoom}>Create Room</Button>
        <Link className="btn btn-primary" to="app">Cancel</Link>
      </div>
    );
  }
});

module.exports = RoomNew;
