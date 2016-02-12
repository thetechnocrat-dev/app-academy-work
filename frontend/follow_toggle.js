var FollowToggle = function($el) {
  this.userId = $el.data("data-user-id");
  this.followState = $el.data("data-initial-follow-state");
  this.$el = $el;
  this.render();
};

FollowToggle.prototype.render = function () {
  if( this.followState === "followed") {
    return "unfollow";
  } else {
    return "follow";
  }
};


module.exports = FollowToggle;
