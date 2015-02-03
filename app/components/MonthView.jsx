var React = require('react');
var _ = require('underscore');
var DateUtils = require('../DateUtils');

var MonthHeader = React.createClass({
    render: function () {
        var header = _.map('DLMMJVS', function (e, idx) { 
            return (
                <div key={idx} className="du">
                    <strong>{e}</strong>
                </div>
            );
        });
        return (
            <div>
                <h3>{DateUtils.getMonthName(this.props.date)}</h3>
                <div className="row month-header">{header}</div>
            </div>
        );
    }
});

var MonthBody = React.createClass({
    render: function () {
        var dayMap = {};
        for (var idx = 0; idx < this.props.active.length; idx++) {
            var name = this.props.active[idx];
            var date = new Date(name);
            dayMap[date.getDate()] = {
                class : 'link',
                component : <a href={"files/"+name}>
                                {date.getDate()}
                            </a>,
            };
        }
        var body = []; 
        var first_day = DateUtils.getFirstDay(this.props.date);
        var last_day = DateUtils.getLastDay(this.props.date);
        var idx = -first_day + 1;
        var now = new Date();
        for (var week = 0; week < 5; week++) {
            var weekRow = [];
            for (var day = 0; day < 7; day++) {
                var label = '-';
                if (idx >= 1 && idx <= last_day) {
                    label = '' + idx;
                    if (dayMap[idx]) {
                        label = dayMap[idx].component;
                    }
                }
                if (now.getDate() == idx &&
                    DateUtils.hasSameMonth(now, this.props.date)) {
                    label = <span className="today">{label}</span>
                }
                weekRow.push(
                    <div key={day} 
                         className="du">
                        {label}
                    </div>
                );
                idx++;
            }   
            body.push(<div key={week} className="row">{weekRow}</div>)
        }
        return (<div className="month-body">{body}</div>);
    }
});

var MonthView = React.createClass({
    render: function () {
        return (
            <div>
                <MonthHeader date={this.props.date}/>    
                <MonthBody 
                    date={this.props.date}
                    active={this.props.active} />
            </div>
        );
    },
});

module.exports = MonthView;
