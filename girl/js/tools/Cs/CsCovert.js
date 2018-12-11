/*
 *
 * 类使用说明:转换类
 *
 *
 * By:陈帅
 * 2014.4.2
 * version:2.01111
 */

var CsCovert = {
    _ToJson: function(obj) {
        return JSON.stringify(obj);
    },
    _ToModel: function (json) {
        if (json == "") {
            return null;
        }
        return $.parseJSON(json);
    }
};