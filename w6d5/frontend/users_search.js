var UsersSearch = function(el) {
  this.$el = $(el);
  this.inpt = this.$el.find("input");
  this.ul = this.$el.find("ul.users");
  this.$el.on("input", this.handleInput.bind(this));

};

UsersSearch.prototype.handleInput = function (e) {
  $.ajax({
    url: "/users/search",
    type: "GET",
    dataType: "json",
    data: { query: this.inpt.val()},
    success: function(resp) {
      this.renderResults(resp, this);
    }.bind(this)
  });
};

UsersSearch.prototype.renderResults = function (resp, ctx) {
  resp.forEach(function(el) {
    ctx.ul.append("<li>" + el.username + "</li>");
  });
};

module.exports = UsersSearch;
