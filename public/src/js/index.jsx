const React = require('react');
const RoomList = require('./components/RoomList.jsx');
const RoomNew = require('./components/RoomNew.jsx');
const Router = require('react-router');
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
const RouteHandler = Router.RouteHandler;
// Define root app.
let App = React.createClass({
  render: function () {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});
//Define routes
var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={RoomList} />
    <Route name="newroom" handler={RoomNew} />
  </Route>
);
// bootstrap app and attach to main div in body.
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('main'));
});

