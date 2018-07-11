+function(){
 /*头部滚动事件**/
  var wh=$('body').height();
   $(window).bind("scroll", function (){ 
  var $stop=$('body').scrollTop(); //垂直偏移
   if($stop!==0){
    $('.top_page').css({
	opacity:1,
	zIndex:100,
	});
   }else{
    $('.top_page').css({
	opacity:0,
	zIndex:-1,
	});
   }
   if($stop>=650){
	    $(".top_1").css({
	   opacity:"1",
		top:"50px",
	})
	$(".img_list").css({
	   opacity:"1",
		top:"0px",
	   })
	   }
    if($stop>=1800){
	    $(".tese").css({
	   opacity:"1",
		top:"210px",
	})
		$(".box").css({
	   opacity:"1",
	   top:"0",
	   })
	   }
	   if($stop>=2450){
	   $("#footer").css({
	   opacity:"1",
       bottom:"-120px",
		})
	   }
});
   /*页面刷新事件*/
   window.onload=function(){
    $(".people").css("opacity","1")
	$(".yych").css({
	 opacity:1,
	 left:"70px",
	})
	$(".download").css({
	 opacity:1,
		 left:"100px",
	 })
   }
	 /**h5 音频**/
	var a1=document.getElementById("a1");
    //var btPlay=document.getElementsByClassName("name1")[0];
	var btPlay=document.querySelectorAll(".people>a");
    console.log(btPlay)
	for(var i=0;i<btPlay.length;i++){
	    btPlay[i].onclick=function(e){
		console.log(a1.paused)
        e.preventDefault();
        if(this.firstElementChild.paused){
			$(this).children()[0].play();
			for(var i=0;i<$(this).siblings().children().length;i++){
            $(this).siblings().children()[i].pause();
			}	
        }
	  } 
	}
    
	
}();