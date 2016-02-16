var FollowToggle = require('./follow_toggle.js');
var UsersSearch = require('./users_search.js');

$(function() {
  var followToggleButtons = $("button.follow-toggle");
  followToggleButtons.each(function() {
    new FollowToggle(this);
  });

  var usersSearches =$("nav.users-search");
  usersSearches.each(function() {
    new UsersSearch(this);
  });
  
});
