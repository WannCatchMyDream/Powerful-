var firstNav = document.getElementById('navI-title1');
var secondNav = document.getElementById('navI-title2');
var thirdNav = document.getElementById('navI-title3');

function vidioDisplay(){
  var script = document.createElement('script');
  script.src = 'http://open.onebox.so.com/dataApi?&tpl=2&callback=get360RankedVideos&_1528902170281&query=%E7%BB%BC%E8%89%BA&url=%E7%BB%BC%E8%89%BA%E6%8E%92%E8%A1%8C&type=relation_variety_rank&src=onebox&num=1&addInfo=types:%E5%85%A8%E9%83%A8|region:%E5%85%A8%E9%83%A8|year:%E5%85%A8%E9%83%A8|limit:10|page:1'
}

function get360RankedVideos(response){
  response.display.hot.map(function(item){
    return item.imgurl;
    console.log(item.imgurl);
  })

}
