var React = require('react');
var MonthView = require('./MonthView.jsx');
var DateUtils = require('../DateUtils');

var App = React.createClass({
    render: function () {
        var now = new Date(); 
        var curMonth = DateUtils.getMonth(now);
        var prevMonth = DateUtils.getPrevMonth(now);
        var cur_files = this.props.filenames.filter(function(e) {
            return DateUtils.hasSameMonth(new Date(e), curMonth);  
        });
        var prev_files = this.props.filenames.filter(function(e) {
            return DateUtils.hasSameMonth(new Date(e), prevMonth);  
        });
        console.log(now);
        console.log(curMonth, cur_files);
        console.log(prevMonth, prev_files);
        return (
            <div> 
                <MonthView date={curMonth} active={cur_files}/>
                <MonthView date={prevMonth} active={prev_files}/>
            </div>
        );
    },  
});

module.exports = App;
