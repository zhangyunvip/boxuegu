<?php
  header("Content-type:text/html;charset=utf-8");

  	//$_SERVER    存储了一切与服务器相关的信息  其中就有PATH_INFO

  	$path = '';
  	if(array_key_exists("PATH_INFO",$_SERVER)){
  		$path = $_SERVER['PATH_INFO'];
  		$path = substr($path,1);// substr()用来截取字符串
//  		echo $path;
// study.com/index.php/dashboard/index
			$arr = explode("/",$path); // explode()是用来以某个分割符来切割字符串
//			var_dump($arr);
			//就可以根据数组中的元素的个数来判断是需要拼接成什么样的字符串
			if(count($arr)==2){  // count(数组) 用户获取数组中元素的个数或是长度
			//以这种域名访问的时候 study.com/index.php/dashboard/index
//				$path = '/views/dashboard/index';
				$path = '/views/'.$arr[0].'/'.$arr[1];
			}else if(count($arr)==1){
				//以这种域名访问的时候 study.com/index.php/index
//				$path = '/views/dashboard/index';
				$path = '/views/dashboard/'.$arr[0];
			}
  	}else {
  	// 如果是通过study.com或是study.com/index.php访问的话，则没有PATH_INFO这个属性，也就是没有后面的路径了，因此需要我们自己手动拼接一个路径出来
  		 $path = '/views/dashboard/index';
  	}

  	$path = $path.'.html';

  	include $path;
?>