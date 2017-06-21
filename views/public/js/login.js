/**
 * Created by Administrator on 2017/6/20.
 */


define(['jquery','cookie'],function($){
    $("#formLogin").submit(function (){   //submit事件相当于是多了一个回车的功能
        var data = $(this).serializeArray();
        console.log(1);
//             preventDefault()   /*阻止默认行为*/
        // stopPropagation()    阻止 冒泡
        $.ajax({
            url:'/api/login', // 简写的形式
            type:'post',
            data:data,
            success:function (info){
                console.log(info);
                if(info.code==200){
//                        var tcinfo=info.result; /* info.result 对象里储存了图片信息*/
//                        tcinfo=JSON.stringify(tcinfo);
//                        console.log(tcinfo);
                   /* $.cookie('name','zhangsan')*/
                    $.cookie("tcinfo",JSON.stringify(info.result))

                    window.location.href='index';

                }

            },
            error:function(errInfo){
                alert("用户名或是密码输入错误，请重新输入。。。");
            }
        })

        return false;

    })
})