/*
 *
 * 类使用说明:配合datas的2层数据解析的json转换model
 *
 *
 * By:陈帅
 * 2014.4.2
 * version:3.0
 */

var CsJson = {
    _Data: {
    },
    _GetModel: function (ModelName, IsJson) {
        if (IsJson) {
            if (this._Data == "") {
                return null;
            }
            var temp = $.parseJSON(this._Data);
            return temp.Data[ModelName];
        } else {
            return this._Data.Data[ModelName];
        }
    },
    _IsDoFirst: function (IsJson) {
        if (IsJson) {
            if (this._Data == "") {
                return null;
            }
            var temp = $.parseJSON(this._Data);
            return temp.Success;
        } else {
            return this._Data.Success;
        }
    },
    _IsDoSecond: function (IsJson) {
        if (IsJson) {
            if (this._Data == "") {
                return null;
            }
            var temp = $.parseJSON(this._Data);
            return temp.Data.Success;
        } else {
            return this._Data.Data.Success;
        }
    },
    _IsError: function (IsJson) {
        if (this._IsDoFirst(IsJson) == true && this._IsDoSecond(IsJson) == true) {
            return true;
        } else {
            return false;
        }
    }
};