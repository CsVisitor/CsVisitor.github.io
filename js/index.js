/// <reference path="_references.js" />
var index = new Vue({
    el: '#app',
    data: {
        name: '1111',
    },
    methods: {

    },
    created: function () {


    },
});

function _In(e) {
    $("#" + e).velocity('transition.flipXIn', { duration: 1650 });
}

function _Out(e) {
    $("#" + e).velocity('transition.flipXOut', { duration: 650 });
}

function go() {
    CsHttp.GoTo("http://j.map.baidu.com/RBsD2");
}

function go2() {
    CsHttp.GoTo("http://j.map.baidu.com/jhvD2");
}

function love() {
    $(document).snowfall({ image: "img/timg.png", minSize: 50, maxSize: 80, });
}


function contact() {
    CsHttp.GoTo("contact.html");
}
function contact2() {
    CsHttp.GoTo("contact2.html");
}

var page1 = {
    load: function () {
        _In("image1");
        _In("name1");
        _In("name2");
        _In("time");
        _In("address");
    },
    exit: function () {
        _Out("image1");
        _Out("name1");
        _Out("name2");
        _Out("time");
        _Out("address");
    }
};
var getConfig = function (callback) {
    $.ajax({
        url: "http://116.62.126.38:3389/index.php/index/base/getHomeSign?url=" + window.location.href,
        type: "get",
        success: function (data) {
            callback(data);
        }
    })
}
function shareweixin(data) {
    var data = JSON.parse(data);
    window.wx.config({
        debug: false,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage']
    });
    wxShare();
}
function wxShare() {
    //检测api是否生效
    wx.ready(function () {
        wx.checkJsApi({
            jsApiList: [
                'getNetworkType',
                'previewImage'
            ],
            success: function (res) {
                console.log(JSON.stringify(res));
            }
        });
        //分享给好友
        wx.onMenuShareAppMessage({
            title: '陈帅&林露  我们结婚啦',
            desc: '这是一封富有魔性的请柬你不点一下吗?!',
            link: 'http://love.ttwyx.cn/index2.html', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'http://love.ttwyx.cn/img/me/ico.jpg', // 分享图标
            success: function () {
                // 用户点击了分享后执行的回调函数
            }
        });

        //分享到朋友圈
        wx.onMenuShareTimeline({
            title: '陈帅&林露  我们结婚啦',
            link: 'http://love.ttwyx.cn/index2.html',
            imgUrl: 'http://love.ttwyx.cn/img/me/ico.jpg'
        });

    });
}


$(document).ready(function () {
    getConfig(shareweixin);
    $("#app").show();
    createSnow('', 160);
    page1.load();
    CsCommon._Delay(3000).then(function () {
        page1.exit();
        $(".topRight").show();
        $(".bottomRight").show();
        CsCommon._Delay(300).then(function () {
            $("#page1").removeClass("active");
            $("#page2").addClass("active");
            var doInAction = new Array();
            var doOutAction = new Array();
            doInAction.push("transition.bounceUpIn");
            doOutAction.push("transition.bounceUpOut");
            doInAction.push("transition.bounceDownIn");
            doOutAction.push("transition.bounceDownOut");
            doInAction.push("transition.bounceLeftIn");
            doOutAction.push("transition.bounceLeftOut");
            doInAction.push("transition.bounceRightIn");
            doOutAction.push("transition.bounceRightOut");
            doInAction.push("transition.shrinkIn");
            doOutAction.push("transition.shrinkOut");
            doInAction.push("transition.whirlIn");
            doOutAction.push("transition.whirlOut");
            doInAction.push("transition.swoopIn");
            doOutAction.push("transition.swoopOut");
            var mySequence = new Array();
            //var o = { e: $("#pic1"), p: doInAction[CsCommon._RadomNums(5)], o: { duration: 650 } }
            //mySequence.push(o);
            //$.Velocity.RunSequence(mySequence);
            //return;

            for (var i = 1; i < 44; i++) {
                if (i != 19 && i != 20 && i != 21 && i != 12
                    && i != 36 && i != 30 && i != 18 && i != 26 && i != 42 && i != 15
                    && i != 16 && i != 17 && i != 25
                    && i != 33 && i != 34 && i != 32) {
                    var o = { e: $("#pic" + i), p: doInAction[CsCommon._RadomNums(5)], o: { duration: 650 } }
                    mySequence.push(o);
                    o = { e: $("#pic" + i), p: doOutAction[CsCommon._RadomNums(5)], o: { duration: 350 } }
                    mySequence.push(o);
                }

                if (i == 16 || i == 17 || i == 18 || i == 25 || i == 33 || i == 34 || i == 32) {
                    var o = { e: $("#pic" + i), p: doInAction[CsCommon._RadomNums(5)], o: { duration: 1650 } }
                    mySequence.push(o);
                    o = { e: $("#pic" + i), p: doOutAction[CsCommon._RadomNums(5)], o: { duration: 350 } }
                    mySequence.push(o);
                }
                if (i == 42) {
                    var o = { e: $("#pic" + i), p: doInAction[CsCommon._RadomNums(5)], o: { duration: 650 } }
                    mySequence.push(o);
                    o = { e: $("#pic" + i), p: doOutAction[CsCommon._RadomNums(5)], o: { duration: 350 } }
                    mySequence.push(o);

                    var o = { e: $("#pic" + i + "1"), p: doInAction[CsCommon._RadomNums(5)], o: { duration: 1650 } }
                    mySequence.push(o);
                    o = { e: $("#pic" + i + "1"), p: doOutAction[CsCommon._RadomNums(5)], o: { duration: 350 } }
                    mySequence.push(o);
                }

                if (i == 15) {
                    var o = { e: $("#pic" + i), p: doInAction[CsCommon._RadomNums(5)], o: { duration: 650 } }
                    mySequence.push(o);
                    o = { e: $("#pic" + i), p: doOutAction[CsCommon._RadomNums(5)], o: { duration: 350 } }
                    mySequence.push(o);
                    var o = { e: $("#pic" + i + "1"), p: doInAction[CsCommon._RadomNums(5)], o: { duration: 650 } }
                    mySequence.push(o);
                    o = { e: $("#pic" + i + "1"), p: doOutAction[CsCommon._RadomNums(5)], o: { duration: 350 } }
                    mySequence.push(o);
                    var o = { e: $("#pic" + i + "2"), p: doInAction[CsCommon._RadomNums(5)], o: { duration: 650 } }
                    mySequence.push(o);
                    o = { e: $("#pic" + i + "2"), p: doOutAction[CsCommon._RadomNums(5)], o: { duration: 350 } }
                    mySequence.push(o);
                }

                if (i == 36) {
                    var o = { e: $("#pic" + i), p: doInAction[CsCommon._RadomNums(5)], o: { duration: 1650 } }
                    mySequence.push(o);

                    var o = { e: $("#pic" + i), p: 'callout.shake', o: { duration: 1650 } }
                    mySequence.push(o);
                    


                    o = { e: $("#pic" + i), p: doOutAction[CsCommon._RadomNums(5)], o: { duration: 350 } }
                    mySequence.push(o);

                    var o = { e: $("#pic" + i + "1"), p: doInAction[CsCommon._RadomNums(5)], o: { duration: 650 } }
                    mySequence.push(o);
                    o = { e: $("#pic" + i + "1"), p: doOutAction[CsCommon._RadomNums(5)], o: { duration: 350 } }
                    mySequence.push(o);
                }
                if (i == 26) {
                    var o = { e: $("#pic" + i), p: doInAction[CsCommon._RadomNums(5)], o: { duration: 1650 } }
                    mySequence.push(o);
                    o = { e: $("#pic" + i), p: doOutAction[CsCommon._RadomNums(5)], o: { duration: 350 } }
                    mySequence.push(o);

                    var o = { e: $("#pic" + i + "1"), p: doInAction[CsCommon._RadomNums(5)], o: { duration: 650 } }
                    mySequence.push(o);
                    o = { e: $("#pic" + i + "1"), p: doOutAction[CsCommon._RadomNums(5)], o: { duration: 350 } }
                    mySequence.push(o);
                }
            }
            var o = { e: $("#page2"), p: doOutAction[CsCommon._RadomNums(6)], o: { duration: 0 } }
            mySequence.push(o);
            o = { e: $("#page3"), p: "transition.slideRightBigIn", o: { duration: 650 } }
            mySequence.push(o);

            // 调用这个自定义的序列名称 还可以在其他地方复用
            for (var i = 1; i < 6; i++) {
                var o = { e: $("#page3pic" + i), p: doInAction[CsCommon._RadomNums(6)], o: { duration: 650 } }
                mySequence.push(o);
            }

            o = { e: $("#page3"), p: doOutAction[CsCommon._RadomNums(6)], o: { duration: 0 } }
            mySequence.push(o);
            o = { e: $("#page4"), p: 'transition.slideRightBigIn', o: { duration: 650 } }
            mySequence.push(o);

            for (var i = 1; i < 7; i++) {
                var o = { e: $("#page4pic" + i), p: doInAction[CsCommon._RadomNums(6)], o: { duration: 1650 } }
                mySequence.push(o);
                var o = { e: $("#page4pic" + i), p: doOutAction[CsCommon._RadomNums(6)], o: { duration: 1650 } }
                mySequence.push(o);
            }

            o = { e: $("#page4"), p: doOutAction[CsCommon._RadomNums(6)], o: { duration: 0 } }
            mySequence.push(o);
            o = { e: $("#page5"), p: 'transition.slideRightBigIn', o: { duration: 650 } }
            mySequence.push(o);

            for (var i = 1; i < 3; i++) {
                var o = { e: $("#page5pic" + i), p: doInAction[CsCommon._RadomNums(6)], o: { duration: 650 } }
                mySequence.push(o);
            }


            o = { e: $("#page5"), p: doOutAction[CsCommon._RadomNums(6)], o: { duration: 0 } }
            mySequence.push(o);
            o = { e: $("#page6"), p: 'transition.slideRightBigIn', o: { duration: 650 } }
            mySequence.push(o);

            for (var i = 1; i < 7; i++) {
                var o = { e: $("#page6pic" + i), p: doInAction[CsCommon._RadomNums(6)], o: { duration: 650 } }
                mySequence.push(o);
            }

            o = { e: $("#page6"), p: doOutAction[CsCommon._RadomNums(6)], o: { duration: 0 } }
            mySequence.push(o);
            o = { e: $("#page7"), p: 'transition.slideRightBigIn', o: { duration: 650 } }
            mySequence.push(o);

            for (var i = 1; i < 11; i++) {
                if (i != 4 && i != 6 && i != 8 && i != 9 && i != 10 && i != 11) {
                    var o = { e: $("#page7pic" + i), p: doInAction[CsCommon._RadomNums(6)], o: { duration: 650 } }
                    mySequence.push(o);
                    o = { e: $("#page7pic" + i), p: doOutAction[CsCommon._RadomNums(5)], o: { duration: 350 } }
                    mySequence.push(o);
                }
                if (i == 4 || i == 6 || i == 8 || i == 9 || i == 10 || i == 11) {
                    var o = { e: $("#page7pic" + i), p: doInAction[CsCommon._RadomNums(6)], o: { duration: 1650 } }
                    mySequence.push(o);
                    o = { e: $("#page7pic" + i), p: doOutAction[CsCommon._RadomNums(5)], o: { duration: 350 } }
                    mySequence.push(o);
                }
            }

            o = { e: $("#page7"), p: doOutAction[CsCommon._RadomNums(6)], o: { duration: 0 } }
            mySequence.push(o);
            o = { e: $("#page8"), p: 'transition.slideRightBigIn', o: { duration: 650 } }
            mySequence.push(o);

            for (var i = 1; i < 9; i++) {
                var o = { e: $("#page8pic" + i), p: doInAction[CsCommon._RadomNums(6)], o: { duration: 650 } }
                mySequence.push(o);
                o = { e: $("#page8pic" + i), p: doOutAction[CsCommon._RadomNums(5)], o: { duration: 350 } }
                mySequence.push(o);
            }
            o = { e: $("#page8"), p: doOutAction[CsCommon._RadomNums(6)], o: { duration: 0 } }
            mySequence.push(o);
            o = { e: $("#page9"), p: 'transition.slideRightBigIn', o: { duration: 650 } }
            mySequence.push(o);
            o = { e: $(".topRight"), p: doOutAction[CsCommon._RadomNums(6)], o: { duration: 650 } }
            mySequence.push(o);
            o = { e: $(".bottomRight"), p: doOutAction[CsCommon._RadomNums(6)], o: { duration: 650 } }
            mySequence.push(o);
            for (var i = 1; i < 6; i++) {
                var o = { e: $("#page9pic" + i), p: doInAction[CsCommon._RadomNums(6)], o: { duration: 650 } }
                mySequence.push(o);
            }
          
            // 调用这个自定义的序列名称 还可以在其他地方复用
            $.Velocity.RunSequence(mySequence);
        });
    });
});