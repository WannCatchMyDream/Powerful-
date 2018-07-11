+function(){
 /*头部滚动事件**/
  var wh=$('body').height();
  $(window).scroll(function(){
   if($('body').scrollTop()!==0){
    $('.left_bar').css("opacity","1");
	$('#top_bar').css({
		background:"rgba(255,255,255,.9)",
		position:"fixed",
	});
	$(".right_bar>li").css("left","-40px");
   }else{
    $('.left_bar').css("opacity","0");
	$('#top_bar').css({
		background:"rgba(255,255,255,0)",
		position:"relative",

	});
	$(".right_bar>li").css("left","0px");
   }
  })



}();