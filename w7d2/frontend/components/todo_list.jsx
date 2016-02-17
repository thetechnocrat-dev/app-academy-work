var React = require('react'),
    TodoStore = require('../stores/todo_store'),
    TodoListItem = require('./todo_list_item');

var TodoList = React.createClass({
  getInitialState: function () {
    return({ todos: TodoStore.all() });
  },

  componentDidMount: function() {
    TodoStore.addChangedHandler(this.onTodoChange);
    TodoStore.fetch();
  },

  onTodoChange: function() {
    this.setState({todos: TodoStore.all()});
  },

  todoTitles: function() {
    var that = this;

    return Object.keys(this.state.todos).map(function(key, idx){
      var todo = that.state.todos[key];
      return(
        <TodoListItem todoListItem={todo} key={idx}/>
      );
    });
  },

  render: function() {
    return(
      <div>
        <ul>
          {this.todoTitles()}
        </ul>
      </div>
    );
  }
});

module.exports = TodoList;
