var DateUtils =  {
    getFirstDay: function (date) {
        var curMonth = DateUtils.getMonth(date);
        return curMonth.getDay();
    },

    getLastDay: function (date) {
        var nextMonth = DateUtils.getNextMonth(date);
        nextMonth.setDate(nextMonth.getDate() - 1);
        return nextMonth.getDate();
    },

    getMonth: function (date) {
        var curMonth = new Date(date.getFullYear(), date.getMonth());
        return curMonth;
    },
    
    getPrevMonth: function (date) {
        var curMonth = DateUtils.getMonth(date);       
        var year = curMonth.getFullYear();
        var month = curMonth.getMonth() - 1;
        if (month < 0) {
            year = year - 1;
            month = 11;
        }
        return new Date(year, month);
    },

    getNextMonth: function (date) {
        var curMonth = DateUtils.getMonth(date); 
        var year = curMonth.getFullYear();
        var month = curMonth.getMonth() + 1;
        if (month > 11) {
            month = 0;
            year = year + 1;
        }
        return new Date(year, month);
    },

    hasSameMonth: function (a, b) {
        return a.getYear()  == b.getYear() &&
               a.getMonth() == b.getMonth();
    },

    getMonthName: function (date) {
        return ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
                "Julio", "Agosto", "Septiembre", "Octube", "Noviembre",
                "Diciembre"][date.getMonth()]; 
    }
};

module.exports = DateUtils;
