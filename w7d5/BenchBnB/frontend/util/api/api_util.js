var ApiActions = require('../../actions/api_actions');

var ApiUtil = {
  fetchBenches: function() {
    $.ajax({
      url: 'api/bench',
      dataType: 'json',
      success:
        function(response) {
          ApiActions.recieveAll(response);
      }
    });
  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
