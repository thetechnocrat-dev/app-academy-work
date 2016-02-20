var _todos = {},
    _callbacks = [];

var TodoStore = {
  changed: function() {
    _callbacks.forEach(function(cb) {
      cb();
    });
  },

  addChangedHandler: function(cb) {
    _callbacks.push(cb);
  },

  removeChangedHandler: function(cb) {
    var cbIndex = _callbacks.indexOf(cb);
    if(cbIndex !== -1) {
      _callbacks.splice(cbIndex,1);
    }
  },

  all: function() {
    return Object.assign({}, _todos);
  },

  fetch: function() {
    var that = this;
    $.ajax(
      {
        url: "/api/todos/",
        type: "GET",
        dataType: "JSON",
        success: function(response) {
          response.forEach(function(todo) {
            _todos[todo.id] = todo;
          });
          that.changed();
        }
      }
    );
  },

  create: function(todo) {
    var that = this;
    $.ajax(
      {
        url: "/api/todos",
        type: "POST",
        data: { todo: todo },
        success: function(response) {
          _todos[response.id] = response;
          that.changed();
        }
      }
    );
  },

  destroy: function(id) {
    var that = this;
    var todo = _todos[id];
    if (todo) {
      $.ajax(
        {
          url: "/api/todos/" + id,
          type: "DELETE",
          success: function(response) {
            delete _todos[id];
            that.changed();
          }
        }
      );
    }
  },

  toggleDone: function(id) {
    var that = this;
    var todo = _todos[id];
    if(todo) {
      todo.done = !todo.done;
      $.ajax(
        {
          url: "/api/todos/" + id,
          type: "PATCH",
          data: { todo: {done: todo.done}},
          success: function(response){
            that.changed();
          }
        }
      );
    }
  }
};



module.exports = TodoStore;
