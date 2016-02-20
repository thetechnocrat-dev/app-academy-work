var React = require('react');
var BenchStore = require('../stores/bench');
var Index = require('./index');

var Map = React.createClass({
  getInitialState: function() {
    return ({ benches: BenchStore.all() });
  },
  _onChange: function() {
    this.setState( { benches : BenchStore.all() });
  },
  componentDidMount: function(){
    this.benchToken = BenchStore.addListener(this._onChange);
    ApiUtil.fetchBenches();

    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  },
  componentWillUnmount: function() {
    this.benchToken.remove();
  },
  addMarkers: function() {
    console.log(this.state.benches);
    for (var i = 0; i < this.state.benches.length; i++) {
      var bench = this.state.benches[i];

      var myLatLng = { lat: bench.lat, lng: bench.lng };

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: bench.description
      });

      marker.setMap(marker);
    }

    myLatLng = {lat: 37.7758, lng: -122.435};

    marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: 'Hello World!'
    });
  },

  render: function() {
    return (
      <div className='map' ref='map'>
        {this.addMarkers()}
      </div>
    );
  }

});

module.exports = Map;
