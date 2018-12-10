/// <reference path="_references.js" />

function  go(parameters) {
    CsHttp.GoTo("http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D%E7%A6%8F%E5%BB%BA%E7%92%9F%E6%B1%9F%E5%A4%A7%E9%85%92%E5%BA%97");
}

function  love() {
    $(document).snowfall({ image: "img/timg.png", minSize: 50, maxSize: 80, });
}


function contact() {
    CsHttp.GoTo("index.html");
}


$(document).ready(function () {
    $("#app").show();
    createSnow('', 160);
});