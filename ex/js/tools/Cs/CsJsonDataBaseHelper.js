/*
 *
 * 类使用说明:对象操作帮助类
 *
 * By:陈帅
 * 2014.4.2
 * version:2.01111
 */

var CsJsonDataBaseHelper = {
    modelDatasJson: '',
    modelDatasObject: '',
    _Init: function (objData, objName) {
        var t = objData;
        if (objName == undefined) {
            this.modelDatasObject = t;
        } else {
            CsJson._Data = t;
            this.modelDatasObject = CsJson._GetModel(objName, false);
        }
    },
    _GetModelData: function (index) {
        if (index < this.modelDatasObject.length) {
            return this.modelDatasObject[index];
        } else {
            return null;
        }
    },
    _AddModelData: function (dataObj) {
        this.modelDatasObject.push(dataObj);
    },
    _GetmodelDatasJsonNow: function () {
        return CsCovert._ToJson(this.modelDatasObject);
    },
    _GetModelsCount: function () {
        return this.modelDatasObject.length;
    },
    _GetModelsData: function () {
        return this.modelDatasObject;
    }
};