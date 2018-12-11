/*
 *
 * 类使用说明:Ajax
 *
 *
 * By:陈帅
 * 2014.4.2
 * version:2.01111
 */

var CsAjax = {
    _Function: "",
    _ModelData: {
    },
    _ModelJsonData: {},
    _Url: "",
    _Data: {
    },
    _GetDataJson: function () {
        this._ModelJsonData = JSON.stringify(this._ModelData);
        this._Data = {
            AjaxAction: this._Function,
            Data: "11111111" + this._ModelJsonData
        };
        return CsCovert._ToJson(this._Data);
    },
    _Ajax: function (callBack) {
        this._ModelJsonData = JSON.stringify(this._ModelData);
        this._Data = {
            AjaxAction: this._Function,
            Data: this._ModelJsonData
        };
        $.ajax({
            type: "POST",
            url: this._Url,
            data: this._Data,
            success: function (response) {
                callBack(response);
            }
        });
    },
    _AjaxNoDataHasFunction: function (func,dataString, callBack) {
        var tempData = {
            AjaxAction:func,
            data: dataString
        };
        $.ajax({
            type: "POST",
            url: this._Url,
            data: tempData,
            success: function (response) {
                callBack(response);
            }
        });
    },
    _AjaxNoData: function (dataString, callBack) {
        var tempData = {
            data: dataString
        };
        $.ajax({
            type: "POST",
            url: this._Url,
            data: tempData,
            success: function (response) {
                callBack(response);
            }
        });
    },
    _AjaxHasData: function (dataJson, callBack) {
        this._Data = CsCovert._ToModel(dataJson);
        $.ajax({
            type: "POST",
            url: this._Url,
            data: this._Data,
            success: function (response) {
                callBack(response);
            }
        });
    },
    _AjaxCommonHandler: function (callBack) {
        this._Url = "Handler/CommonHandler.aspx";
        this._ModelJsonData = JSON.stringify(this._ModelData);
        this._Data = {
            AjaxAction: this._Function,
            Data: this._ModelJsonData
        };
        $.ajax({
            type: "POST",
            url: this._Url,
            data: this._Data,
            success: function (response) {
                callBack(response);
            }
        });
    },
    _AjaxUserHanlder: function (callBack) {
        this._Url = "Handler/UserHandler.aspx";
        this._ModelJsonData = JSON.stringify(this._ModelData);
        this._Data = {
            AjaxAction: this._Function,
            Data: this._ModelJsonData
        };
        $.ajax({
            type: "POST",
            url: this._Url,
            data: this._Data,
            success: function (response) {
                callBack(response);
            }
        });
    },
    _AjaxActHandler: function (callBack) {
        this._Url = "Handler/ActHandler.aspx";
        this._ModelJsonData = JSON.stringify(this._ModelData);
        this._Data = {
            AjaxAction: this._Function,
            Data: this._ModelJsonData
        };
        $.ajax({
            type: "POST",
            url: this._Url,
            data: this._Data,
            success: function (response) {
                callBack(response);
            }
        });
    },
    _AjaxCheckHandler: function (callBack) {
        this._Url = "Handler/CheckHandler.aspx";
        this._ModelJsonData = JSON.stringify(this._ModelData);
        this._Data = {
            AjaxAction: this._Function,
            Data: this._ModelJsonData
        };
        $.ajax({
            type: "POST",
            url: this._Url,
            data: this._Data,
            success: function (response) {
                callBack(response);
            }
        });
    },
    _AjaxGameHandler: function (callBack) {
        this._Url = "Handler/GameHandler.aspx";
        this._ModelJsonData = JSON.stringify(this._ModelData);
        this._Data = {
            AjaxAction: this._Function,
            Data: this._ModelJsonData
        };
        $.ajax({
            type: "POST",
            url: this._Url,
            data: this._Data,
            success: function (response) {
                callBack(response);
            }
        });
    },
    _AjaxIndexHandler: function (callBack) {
        this._Url = "Handler/IndexHandler.aspx";
        this._ModelJsonData = JSON.stringify(this._ModelData);
        this._Data = {
            AjaxAction: this._Function,
            Data: this._ModelJsonData
        };
        $.ajax({
            type: "POST",
            url: this._Url,
            data: this._Data,
            success: function (response) {
                callBack(response);
            }
        });
    },
    _AjaxGet: function (url,callBack) {
        this._Url = url;
        this._ModelJsonData = JSON.stringify(this._ModelData);
        this._Data = {
            AjaxAction: this._Function,
            Data: this._ModelJsonData
        };
        $.ajax({
            type: "GET",
            url: this._Url,
            data: this._Data,
            success: function (response) {
                callBack(response);
            }
        });
    }
};