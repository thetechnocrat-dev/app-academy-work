var FollowToggle = function(el) {

  this.$el = $(el);
  this.userId = this.$el.data("user-id");
  this.followState = this.$el.data("initial-follow-state");
  this.render();
  this.$el.on("click", this.handleClick.bind(this));
};

FollowToggle.prototype.render = function () {
  var text;
  if( this.followState === "followed") {
    text = "unfollow";
  } else {
    text = "follow";
  }
  this.$el.html(text);
};

FollowToggle.prototype.handleClick = function (e)  {
  e.preventDefault();
  followClick(this);
};

function followClick(context) {
  var requestType;
  if (context.followState === "followed") {
    requestType = "DELETE";
  } else {
    requestType = "POST";
  }

  $.ajax({

    url: "/users/" + context.userId + "/follow",
    type: requestType,
    dataType: "json",
    data: { user_id: context.userId },
    success: function(resp){
      context.followState = switchState(context.followState);
      context.render();
    }.bind(context)
  });
}


function switchState(state) {
  if (state === "followed") {
    return "unfollowed";
  } else {
    return "followed";
  }
}


module.exports = FollowToggle;
