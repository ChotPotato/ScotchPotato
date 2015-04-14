const React = require('react');
const RoomList = require('./components/RoomList.jsx');
const Router = require('react-router');
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
const RouteHandler = Router.RouteHandler;

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={RoomList} />
  </Route>
);

let App = React.createClass({
  render: function () {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('main'));
});

