var React = require('react');

var Headers = React.createClass({
  render: function() {
    var selected = this.props.selectedPage;
    var that = this;
    var headers = this.props.pages.map( function( page, index ) {
      var title = page.title;
      var klass = "";
      if (index === selected) {
        klass = "active";
      }

      return (
        <span
          key={ index }
          className={ klass }
          onMouseOver={ that.props.onTabChosen.bind( null, index )}>
          {title}{' '}
        </span>
      );
    });
    return (
      <div>
        {headers}
      </div>
    );
  }
});

var Tabs = React.createClass({
  getInitialState: function() {
    return {selectedPage: 0};
  },

  selectTab: function(num) {
    this.setState({selectedPage: num});
  },

  render: function() {
    var page = this.props.pages[this.state.selectedPage];

    return(
      <div className = {"widget"} >
        <Headers
          selectedPage={this.state.selectedPage}
          onTabChosen={this.selectTab}
          pages={this.props.pages}>
        </Headers>
        <p>
          {page.content}
        </p>
      </div>
    );
  }
});

module.exports = Tabs;
