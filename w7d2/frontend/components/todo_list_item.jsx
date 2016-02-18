// we have this.props.todoListItem containing the actual todo item

var React = require('react');

var TodoListItem = React.createClass({
  render: function () {
    var todo = this.props.todoListItem;
    return (
      <div>
        <div className="todo-title">{todo.title}</div>
        <div className="todo-body">{todo.body}</div><br/>
      </div>
    );
  }
});

module.exports = TodoListItem;
