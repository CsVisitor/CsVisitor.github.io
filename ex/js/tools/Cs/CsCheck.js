﻿/*
 *
 * 类使用说明:字符串的验证,是否为手机,QQ之类的
 *
 *
 * By:陈帅
 * 2014.4.2
 * version:2.01111
 */
var CsCheck = function () {
};
//判断输入是否是手機號
CsCheck.prototype.isPhone = function (str) {
    var telReg = !!str.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
    //如果手机号码不能通过验证
    if (telReg == false) {
        return false
    }
    return true;
};

/******************************/
// 判断输入是否是一个由 0-9 / A-Z / a-z 组成的字符串
CsCheck.prototype.isalphanumber = function(str) {
    var result = str.match(/^[a-zA-Z0-9]+$/);
    if (result == null)
        return false;
    return true;
};

/******************************/
// 判断输入是否是一个由 0-9组成的字符串
CsCheck.prototype.isnumbers = function (str) {
    var result = str.match(/^[0-9]+$/);
    if (result == null)
        return false;
    return true;
};
/******************************/
// 判断输入是否是一个数字--(数字包含小数)--
CsCheck.prototype.isnumber = function(str) {
    return !isNaN(str);
};

// 判断输入是否是一个整数
CsCheck.prototype.isint = function(str) {
    var result = str.match(/^(-|\+)?\d+$/);
    if (result == null) return false;
    return true;
};

// 判断输入是否是有效的长日期格式 - "YYYY-MM-DD HH:MM:SS" || "YYYY/MM/DD HH:MM:SS"
CsCheck.prototype.isdatetime = function(str) {
    var result = str.match(/^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/);
    if (result == null) return false;
    var d = new Date(result[1], result[3] - 1, result[4], result[5], result[6], result[7]);
    return (d.getFullYear() == result[1] && (d.getMonth() + 1) == result[3] && d.getDate() == result[4] && d.getHours() == result[5] && d.getMinutes() == result[6] && d.getSeconds() == result[7]);
};

// 检查是否为 YYYY-MM-DD || YYYY/MM/DD 的日期格式
CsCheck.prototype.isdate = function(str) {
    var result = str.match(/^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (result == null) return false;
    var d = new Date(result[1], result[3] - 1, result[4]);
    return (d.getFullYear() == result[1] && d.getMonth() + 1 == result[3] && d.getDate() == result[4]);
};

// 判断输入是否是有效的电子邮件
CsCheck.prototype.isemail = function(str) {
    var result = str.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
    if (result == null) return false;
    return true;
};

// 去除字符串的首尾的空格
CsCheck.prototype.trim = function(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
};

// 返回字符串的实际长度, 一个汉字算2个长度
CsCheck.prototype.strlen = function(str) {
    return str.replace(/[^\x00-\xff]/g, "**").length;
};

//匹配中国邮政编码(6位)
CsCheck.prototype.ispostcode = function(str) {
    var result = str.match(/[1-9]\d{5}(?!\d)/);
    if (result == null) return false;
    return true;
};
//匹配国内电话号码(0511-4405222 或 021-87888822)
CsCheck.prototype.istell = function(str) {
    var result = str.match(/\d{3}-\d{8}|\d{4}-\d{7}/);
    if (result == null) return false;
    return true;
};

//校验是否为(0-10000)的整数
CsCheck.prototype.isint1 = function(str) {
    var result = str.match(/^[0-9]$|^([1-9])([0-9]){0,3}$|^10000$/);
    if (result == null) return false;
    return true;
};

//匹配腾讯QQ号
CsCheck.prototype.isqq = function(str) {
    var result = str.match(/[1-9][0-9]{4,}/);
    if (result == null) return false;
    return true;
};

//匹配身份证(15位或18位)
CsCheck.prototype.isidcard = function(str) {
    var result = str.match(/\d{15}|\d{18}/);
    if (result == null) return false;
    return true;
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//校验文本是否为空
CsCheck.prototype.checknull = function(field, sval) {
    if (field.value == "") {
        //myAlert('提示',"请填写" + sval + "！");
        field.focus();
        return false;
    }
    return true;
};

//屏蔽输入字符
/***********************
调用方法：
    在文本框中加上 onkeypress="return checkChar()"
*************************/
CsCheck.prototype.checkChar = function() {
    var keycode = event.keyCode;
    if (!(keycode >= 48 && keycode <= 57)) {
        return false;
    }
    return true;
};