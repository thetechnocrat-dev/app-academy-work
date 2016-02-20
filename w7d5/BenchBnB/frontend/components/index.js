var React = require('react');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/api/api_util');

var Index = React.createClass({
  getInitialState: function() {
    return ({ benches: BenchStore.all() });
  },
  _onChange: function() {
    this.setState( { benches : BenchStore.all() });
  },
  componentDidMount: function() {
    this.benchToken = BenchStore.addListener(this._onChange);
    ApiUtil.fetchBenches();
  },
  componentWillUnmount: function() {
    this.benchToken.remove();
  },
  createBenchList: function() {
    return this.state.benches.map(function(bench) {
      return(
         <li key={bench.id}>
          {bench.description} <br />
          lat: {bench.lat} <br />
          long: {bench.lng}
        </li>
      );
    });
  },

  render: function() {
    return (
      <ul className='benchIndex'>
        {this.createBenchList()}
      </ul>
    );
  }

});

module.exports = Index;
