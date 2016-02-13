var FollowToggle = require('./follow_toggle.js');

$(function() {
  var followToggleButtons = $("button.follow-toggle");
  followToggleButtons.each(function() {
    new FollowToggle(this);
  });
});
