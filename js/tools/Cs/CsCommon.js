/*
 *
 * 类使用说明:公共方法
 *
 *
 * By:陈帅
 * 2014.4.2
 * version:2.01111
 */
var CsCommon = {
    _CopyData2Clipboard: function (btnId, data) {
        var copyContent = "简单百宝箱五一活动强势回归，各路豪杰来领首发奖励：";
    },
    _Delay:function(time) {
        //setTimeout(time,
        //    function() {
        //        console.log(time);
        //    });
        return new Promise((resolve) => setTimeout(resolve, time));
    },
    _RadomNums: function (nums) {

        var n = Math.round(Math.random() * nums);
        console.log(n);
        return n;
    }
    //_Delay: function(time) {
    //    var delay = true;
    //    CsCommon._Delay1(3000).then(function() {
    //        delay = false;
    //    });
    //    while (delay) {
    //        //console.log(delay);
    //    }
    //}
};