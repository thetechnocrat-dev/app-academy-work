var TodoList = require('./components/todo_list'),
    React = require('react'),
    ReactDOM = require('react-dom');

var Todos = React.createClass({
  render: function() {
    return (
      <TodoList />
    );
  }
});

document.addEventListener("DOMContentLoaded",function () {
  ReactDOM.render(
    <Todos />,
    document.getElementById('root')
  );
});
