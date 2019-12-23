var user=document.querySelector('.c_user');
var pass=document.querySelector('.c_pass');
var c_btn1=document.querySelector('.c_btn1');
var c_btn2=document.querySelector('.c_btn2');

c_btn1.onclick=function(){
    ajax({
    url: './php/login.php',
    type: 'get',
    data: 'act=login'+'&user='+user.value+'&pass='+pass.value,
    success: function (data){
        var json=JSON.parse(data);
        alert(json.msg);
    },
    error: function (code){
        alert('链接失败');
    }
    });
}
// c_btn2.onclick=function(){
//     ajax({
//     url: './php/login.php',
//     type: 'get',
//     data: 'act=add'+'&user='+user.value+'&pass='+pass.value,
//     success: function (data){
//         var json=JSON.parse(data);
//         alert(json.msg);
//     },
//     error: function (code){
//         alert('链接失败');
//     }
//     });
// }