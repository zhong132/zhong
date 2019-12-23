function ajax(option){
    // 1.创建数据交互对象
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();//主流浏览器
    } else {
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');//IE56
    }

    if (option.type == 'get' || option.type == 'GET') {
        // 2.打开与服务器的链接
        xhr.open(option.type,option.url+'?'+option.data+'&_='+new Date().getTime(),true);//get
        // 3.将请求发送到服务器
        xhr.send(null);//get请求
    } else if (option.type == 'post' || option.type == 'POST'){
        // 2.打开与服务器的链接
        xhr.open(option.type,option.url,true);//post
        // 设置请求头，作用是模拟form表单数据提交
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        // 3.将请求发送到服务器
        xhr.send(option.data);//post请求
    } else {
        alert('目前只支持get和post请求方式');
        return;
    }

    // 4.服务器响应情况
    xhr.onreadystatechange = function (){//监听状态改变事件
        if (xhr.readyState == 4) {//请求完成
            if (xhr.status == 200) {//请求成功（可以拿到数据）
                option.success(xhr.responseText);
            } else {
                option.error(xhr.status);
            }
        }
    }
}