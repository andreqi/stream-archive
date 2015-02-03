var React = require('react');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');

var App = React.createFactory(require('./components/App.jsx'));

var app = {
    start: function(props) {
        if (ExecutionEnvironment.canUseDOM) {
            React.render(
                App(props), 
                document.getElementById('component')
            ); 
        } else {
            return React.renderToString(App(props));
        }
    },
};

if (ExecutionEnvironment.canUseDOM) {
    var rawProps = document.getElementById("props").innerHTML;
    app.start(JSON.parse(rawProps));
}

module.exports = app;
