/*
 *
 * 类使用说明:登陆类
 *
 *
 * By:陈帅
 * 2014.4.2
 * version:2.01111
 */
var CsLoginOld = {
    _UserName: "",
    _PassWord: "",
    _Login: function(callBack) {
        CsAjax._Url = "/Interface/Login.aspx?action=Login";
        var _Data = {
            u: this._UserName,
            p: this._PassWord
        }
        CsAjax._AjaxHasData(_Data, function(res) {
            callBack(res);
        });
    },
    _LoginOut: function() {
        location.href = "/Interface/Login.aspx?action=LoginOut&ReturnUrl=" + escape(location.href);
    }
};

var CsLogin = {
    _Login: function(callBack) {
        this._LoginCallBack = callBack;
        UShowFastLogin('CsLogin._LoginCallBack');
    },
    _LoginOut: function(callBack) {
        ULogout();
        callBack();
    }
};