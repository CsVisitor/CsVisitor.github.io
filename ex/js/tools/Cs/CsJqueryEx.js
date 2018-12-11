var CsJqueryEx = {
    Host: '',

    postFile: function(url,form,succ) {
        debugger 
        url = CsJqueryEx.Host + url;
        if (url.indexOf("?") > 0) {
            url = url + "&J_AUTH=" + $.cookie("token");
        }
        else {
            url = url + "?J_AUTH=" + $.cookie("token");
        }
        $.ajax({
            url: url,
            contentType: false,
            processData: false,
            type: "post",
            data: form,
            dataType: "json",
            success: function(data, status) {
                if (status == "success") {
                    if (data.status == 200) {
                        succ(data);
                    }
                    if (data.status == 400) {
                        //alert("文件上传失败");
                        index._alert('文件上传失败');
                    }
                }
            },
            error: function() {
                alert("服务器未响应");
            }

        });
    },
    /*
    * 获取数据ajax-get请求
    * @author laixm
    */
    getJSON: function (url, data, callback, errorCallBack=null) {
        url = CsJqueryEx.Host + url;
        if (url.indexOf("?") > 0) {
            url = url + "&J_AUTH=" + $.cookie("token");
        }
        else {
            url = url + "?J_AUTH=" + $.cookie("token");
        }
        $.ajax({
            url: url,
            type: "get",
            async: false,
            contentType: "application/json",
            dataType: "json",
            timeout: 100000,
            data: data,
            success: function (data) {
                console.log(data);
                callback(data);
            },
            error: function (xhr, textstatus, thrown) {
                if (errorCallBack != null) {
                    errorCallBack(xhr)
                }
            }
        });
    },
    /*
     * 提交json数据的post请求
     * @author laixm
     */
    postJSON: function (url, data, callback, errorCallBack) {
        url = CsJqueryEx.Host + url;
        if (url.indexOf("?") > 0) {
            url = url + "&J_AUTH=" + $.cookie("token");
        }
        else {
            url = url + "?J_AUTH=" + $.cookie("token");
        }
        $.ajax({
            url: url,
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: CsCovert._ToJson(data),
            timeout: 600000,
            async: false,
            success: function (msg) {
                callback(msg);
            },
            error: function (xhr, textstatus, thrown) {
                errorCallBack(xhr)
            }
        });
    },
    /*
     * 修改数据的ajax-put请求
     * @author laixm
     */
    putJSON: function (url, data, callback) {
        url = CsJqueryEx.Host + url;
        if (url.indexOf("?") > 0) {
            url = url + "&J_AUTH=" + $.cookie("token");
        }
        else {
            url = url + "?J_AUTH=" + $.cookie("token");
        }

        $.ajax({
            url: url,
            type: "put",
            contentType: "application/json",
            dataType: "json",
            data: CsCovert._ToJson(data),
            timeout: 20000,
            success: function (msg) {
                callback(msg);
            },
            error: function (xhr, textstatus, thrown) {
            }
        });
    },
    /*
     * 删除数据的ajax-delete请求
     * @author laixm
     */
    deleteJSON: function (url, data, callback) {
        url = CsJqueryEx.Host + url;
        if (url.indexOf("?") > 0) {
            url = url + "&J_AUTH=" + $.cookie("token");
        }
        else {
            url = url + "?J_AUTH=" + $.cookie("token");
        }

        $.ajax({
            url: url,
            type: "delete",
            dataType: "json",
            data: data,
            success: function (msg) {
                callback(msg);
            },
            error: function (xhr, textstatus, thrown) {
            }
        });
    },
};;