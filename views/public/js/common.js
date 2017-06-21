
	//NProgress.start();
    //
	//NProgress.done();
    //
	//$('.navs ul').prev('a').on('click', function () {
	//	$(this).next().slideToggle();
	//});


 define(['jquery','cookie','template'],function($,cookie,template){
	 if(!$.cookie("PHPSESSID") && location.pathname!='/login'){
		 location.href='/login';
	 }


	 if(location.pathname!='/login'&&location.pathname!='/index.php/login'&&location.pathname
		 !='/index.php/dashboard/login'){

		 var tcInfo = JSON.parse($.cookie('tcinfo'));
		 var htmlInfo=template('temp',tcInfo);
		 $(".aside>.profile").html(htmlInfo);
	 }
	 $("#logout").on('click',function(){
		 $.ajax({
			 url:'/api/logout',
			 type:'post',
			 success:function(info){
				 if(info.code==200){
					 alert('退出成功');
					 location.href='login'
				 }
			 }
		 })

	 })
 })
