var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs.jsx');
var Clock = require('./clock.jsx');
var Autocomplete = require('./autocomplete.jsx');

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

var names = [ "Aaron", "Arjun", "Austen", "Benjamin", "Bradley",
"Brian", "Brian", "Brian", "Carson", "Chris", "Christopher", "Colin",
"David", "Devin", "Edwin", "Eric", "Eric", "Josh", "Joshua", "Julie",
"Justin", "Kevin", "Kevin", "Ksenia", "Laurie", "Matthew", "Matthew",
"Mehdi", "Meredith", "Michael", "Michael", "Mingshuo", "Nathan", "Nhat",
"Pardha", "Pat", "Pawan", "Peter", "Rafael", "Ryan", "Sam", "Sameeran",
"Scott", "Sean", "Spencer", "Stan", "Stephen", "Steve", "Ted", "Tim",
"Timothy", "Vincent", "Wen", "Yian", "Jeff"
];

var Widgets = React.createClass({
  render: function () {
    return(
      <div
        className={"widgets"}>
        <Tabs pages={pages} />
        <Clock/>
        <Autocomplete names={names}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets />, document.getElementById('main'));
});
