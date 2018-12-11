/*
 *
 * 类使用说明:用户信息
 *
 *
 * By:陈帅
 * 2014.4.2
 * version:2.01111
 */
var CsSecret = {
    //浏览器的代码名
    GetappCodeName: function () {
        return navigator.appCodeName;
    },
    //获取浏览器的名称
    GetappName: function () {
        return navigator.appName;
    },
    //获取浏览器的次要版本
    GetappVersion: function () {
        return navigator.appVersion;
    },
    //获取浏览器的次要版本
    GetcookieEnabled: function () {
        return navigator.cookieEnabled;
    },
    //获取浏览器的次要版本
    Getplatform: function () {
        return navigator.platform;
    }
}