/*
 *
 * 类使用说明:url帮助类
 *
 *
 * By:陈帅
 * 2014.4.2
 * version:2.01111
 */
var CsRequest = {
    _QueryString: function (item) {
        var svalue = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)", "i"));
        return svalue ? svalue[1] : svalue;
    }
};