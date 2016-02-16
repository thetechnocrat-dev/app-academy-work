var React = require('react');

var Time = React.createClass({
  getInitialState: function() {
    return { time: new Date() };
  },
  tick: function() {
    this.setState({ time: new Date() });
  },
  componentDidMount: function() {
    setInterval(this['tick'], 1000);
  },
  render: function() {
    var time = this.state.time;
    var h = time.getHours();
    var m = time.getMinutes();
    if (m < 10) {
      m = "0" + m;
    }
    var s = time.getSeconds();
    if (s < 10 ) {
      s = "0" + s;
    }

    return(
      <p>
        {h + ' : ' + m + ' : ' + s}
      </p>
    );
  }
});

var Weather = React.createClass({
  getInitialState: function() {
    return { weather: { name: "Downloading...", main: { temp: "" } } };
  },
  componentDidMount: function() {
    this.getLocation();
  },
  getLocation: function() {
    var self = this;
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var coord = [ position.coords.latitude, position.coords.longitude ];
        self.getWeather(coord);
      });
  },
  getWeather: function(coord) {
    var url = "http://api.openweathermap.org/data/2.5/weather?lat="
      + coord[0] + "&lon=" + coord[1]
      + "&appid=bcb83c4b54aee8418983c2aff3073b3b";

    var xmlhttp = new XMLHttpRequest();

    var self = this;
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === XMLHttpRequest.DONE ) {
         if(xmlhttp.status === 200){
            self.setState( { weather: xmlhttp.response } );
            console.log(xmlhttp.response);
         }
      }
    };
    xmlhttp.responseType = "json";

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  },

  render: function() {
    var temp = ( this.state.weather.main.temp * (9/5) ) - 459.67;
    return(
      <div>
        <h3>
          {this.state.weather.name}
        </h3>
        <span>
          {"temperature: " + this.state.weather.main.temp}
        </span>
      </div>
    );
  }
});


var Clock = React.createClass({
  render: function() {
    return(
      <div className = {"widget"}>
        <Time/>
        <Weather/>
      </div>
    );
  }
});

module.exports = Clock;
