var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs.jsx');

// hard-coded, one day, pull this from ajaj!
var pages = [
  {
    title: "Lysol Disinfecting Wipes",
    content: "Are really great"
  },
  {
    title: "Windows Vista",
    content: "Is the best operating system"
  },
  {
    title: "San Francisco",
    content: "Is The Place To Be(tm)"
  }
];

var Widgets = React.createClass({
  render: function () {
    return(
      <div
        className={"tabs"}>
        <Tabs pages={pages} />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets />, document.getElementById('main'));
});
