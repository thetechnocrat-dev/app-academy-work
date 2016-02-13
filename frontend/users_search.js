var UsersSearch = function(el) {
  this.$el = $(el);
  this.inpt = el.find("input");
  this.ul = el.find("ul.users");
};

module.exports = UsersSearch;
