var FollowToggle = require('./follow_toggle.js');

$(function() {
  var followToggleButtons = $("button.follow_toggle");
  followToggleButtons.each(function() {
    var followToggleButton = new FollowToggle(this);
  });
});
