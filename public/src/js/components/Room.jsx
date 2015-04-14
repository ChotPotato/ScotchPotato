const React = require('react');
const ListGroupItem = require('react-bootstrap/lib/ListGroupItem');

let Room = React.createClass({
  getDefaultProps() {
    return {
      room: {
        name: ''
      }
    };
  },

  componentDidMount() {
  },

  render() {
    return (
      <ListGroupItem>
        {this.props.room.name}
      </ListGroupItem>
    );
  }
});

module.exports = Room;
