const input = document.getElementById('text');
const suggestionList = document.getElementById('suggestionList');
const nav = document.getElementById('li');
const buttonValue = document.getElementById('searchButton');
const newDisplay = document.getElementById('newDisplay');
const videoDisplay = document.getElementById('videoDisplay');
const webDisplay = document.getElementById('websDisplay');

suggestionList.addEventListener('click',function(event){
  var target = event.target;
   console.log('target:', target);
   if (target.nodeName === 'A' ){
    input.value = target.textContent;
  }else if (target.nodeName === 'B'){
    input.value =target.parentNode.textContent;
  }
});

input.addEventListener('input', (event) => {
  console.log('input event.target.value:', event.target.value);

  const value = event.target.value;

  if (value === '') {
    // 展示热搜十条
    showHotSearches();
  } else {
    // 展示下拉提示
    showSuggestions(value);
  }
});

/**
 * 显示热搜十条
 * @return {void}
 */
function showHotSearches() {
  // 若没有缓存 hotSearches，就通过接口取
  if (!showHotSearches.hotSearches) {
    vedioJsonp({
      query: '',
      callbackFunctionName: 'handleHotSearch',
    });

    return;
  }

  // 否则直接显示
  render(showHotSearches.hotSearches)
}

//未输入时显示热搜 hotResponseArray:保存了热搜关键字的数组。
function handleHotSearch(response) {
  const hotSearches = formatResponse(response);

  render(hotSearches);

  showHotSearches.hotSearches = hotSearches;
}

/**
 * 将优酷的下拉提示返回值格式化为字符串数组
 * @param {Object} response
 * @return {string[]}
 */
function formatResponse(response) {
  return (response.r.map(function (item) {
    return item.w;})|| response.words.map(function (item) {
    return item.c_title;})
  )
}

/**
 * 优酷下拉提示 JSONP 接口
 * @param  {Object} options 包含 query 和 callbackFunctionName 的对象
 * @return {void}
 */
function vedioJsonp(options) {
  const query = options.query;
  const callbackFunctionName = options.callbackFunctionName;
  if(buttonValue.value == "优酷视频"){
  // 最后拼接为 http://tip.soku.com/search_tip_1?jsoncallback=x&query=y
    jsonp('http://tip.soku.com/search_tip_1', {
      queryKey: 'query',
      queryValue: query,

      callbackKey: 'jsoncallback',
      callbackValue: callbackFunctionName,
    });

  }else if(buttonValue.value == "腾讯视频"){
    jsonp('https://data.video.qq.com/fcgi-bin/dataout', {
      queryKey: 'query',
      queryValue: query,

      callbackKey: 'jsoncallback',
      callbackValue: callbackFunctionName,
    });
  }
}

/**
 * 展示下拉提示
 * @param  {string} query 用户输入的查询词
 * @return {void}
 */
function showSuggestions(query) {
  vedioJsonp({
    query: query,
    callbackFunctionName: 'handleSuggestions',
  });
}

function handleSuggestions(response) {
  render(formatResponse(response));
}

/**
 * 渲染下拉提示
 * @param  {string[]} suggestions 下拉提示列表
 * @return {void}
 */
function render(suggestions) {

  cleanSuggestions(suggestionList);

  var n = 1;
  for (var i = 0, length = suggestions.length; i < length; i++) {
    var select = (suggestions[i].split(input.value));
    console.log(select);
    var displayTag = document.createElement("li");
    var numDisplay = document.createElement("span");
    var forClick = document.createElement("a");
    forClick.href='javascript:void(0)';

    // 事件委托了解下
    // forClick.onclick = function(){ input.value = displayValue[0];};

    var number = document.createTextNode(n);
    var textValue = input.value;
    var textNodeValue = document.createTextNode(textValue);

    if (n < 4) {
      numDisplay.classList.add('top3');
    }

    displayTag.appendChild(numDisplay).appendChild(number);
    displayTag.appendChild(forClick);
    if((select[0] == '' || select[1] == '') && select.length >= 2) {
      var selectNode = document.createTextNode(select[0] + select[1]);
      var highLight = document.createElement("b");
      if(select[0] == ''){
        displayTag.appendChild(forClick).appendChild(highLight).appendChild(textNodeValue);
        displayTag.appendChild(forClick).appendChild(selectNode);
      }else{
        displayTag.appendChild(forClick).appendChild(selectNode);
        displayTag.appendChild(forClick).appendChild(highLight).appendChild(textNodeValue);
      }
    }

    if(select[0] != '' && select[1] != ''){
      selectNode = document.createTextNode(suggestions[i]);
      displayTag.appendChild(forClick).appendChild(selectNode);
    }else{}
      suggestionList.appendChild(displayTag);
      n = n + 1;
  }
}

// 主要模块
function searchButton(tips){
  buttonValue.value = tips;
  if(buttonValue.value == '显示'){
    buttonValue.value = '搜索';
  }else if(buttonValue.value != '显示'){

    if(buttonValue.value == '腾讯视频'){
      input.addEventListener('click', (event) => {
      console.log('click event.target.value:', event.target.value);
      const value = event.target.value;

      if (value === '') {
      // 展示腾讯视频热搜九条
      showHotSearches();
      }
    });
      buttonValue.addEventListener('click',() => {var url = 'https://v.qq.com/x/search/?q=' + input.value;
      window.location.assign(url);})
    }else if(buttonValue.value == '优酷视频'){
      input.addEventListener('click', (event) => {
      console.log('click event.target.value:', event.target.value);
      const value = event.target.value;

      if (value === '') {
      // 展示优酷视频热搜十条
      showHotSearches();
      }
    });
      buttonValue.addEventListener('click',() => {var url = 'http://so.youku.com/search_video/q_' + input.value;
      console.log(url);
      window.location.assign(url);})
    }
  }
}

function cleanSuggestions(suggestionList){
  emptyNode(suggestionList);
}

// 三大展示模块
function webPage(){
  cleanSuggestions(videoDisplay);
  cleanSuggestions(newDisplay);

}

function videosDisplay(){
  var script = document.createElement('script');
  script.src = 'http://open.onebox.so.com/dataApi?&tpl=2&callback=get360RankedVideos&_1528902170281&query=%E7%BB%BC%E8%89%BA&url=%E7%BB%BC%E8%89%BA%E6%8E%92%E8%A1%8C&type=relation_variety_rank&src=onebox&num=1&addInfo=types:%E5%85%A8%E9%83%A8|region:%E5%85%A8%E9%83%A8|year:%E5%85%A8%E9%83%A8|limit:10|page:1';
  document.querySelector("head").appendChild(script);

  //增加清空节点函数
}

function get360RankedVideos(response){
  cleanSuggestions(newDisplay);
  cleanSuggestions(webDisplay);
  return response.display.hot.map(function(item){
    console.log(item.imgurl);
    var div = document.createElement('div');
    div.style="width:400px;height:50px;display:inline;"
    var img = document.createElement('img');
    img.style="width:100px;height:180px;margin:15px 15px 15px 10px;"
    var a = document.createElement('a')
    a.href = item.url;
    var movieName = document.createTextNode(item.moviename);
    img.src = item.imgurl;
    console.log(img);
    videoDisplay.appendChild(div).appendChild(a).appendChild(img);
    return (item.imgurl,item.moviename,item.url);
  })
}

function newsDisplay(){
  var script = document.createElement('script');
  script.src = 'https://pc.api.btime.com/btimeweb/getInfoFlow?callback=newsHandle&channel=news&request_pos=channel&citycode=local_330500_330000&sub_channel=&refresh=6&req_count=6&refresh_type=2&pid=3&from=&page_refresh_id=bdd83c10-6f19-11e8-8796-6c92bf0a9cdb&_=1528901698882'
  document.querySelector('head').appendChild(script);
  console.log(script);
}

function newsHandle(response){
  cleanSuggestions(videoDisplay);
  cleanSuggestions(webDisplay);
  console.log(response);
  return response.data.map(function(item){
    var title = document.createTextNode(item.data.title);
    var url = item.open_url;
    var cover = item.data.covers;
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    div1.style ="float:left;weight:640;height:200px;margin:10px 10px 10px;"
    div2.style="font-size:18px;width: 150px;"
    var img = document.createElement('img');
    img.style="width:190px;height:106px;"
    var a = document.createElement('a');
    if(title && url && cover){
      img.src = item.data.covers;
      a.href = url;
      newDisplay.appendChild(a).appendChild(div1).appendChild(img);
      newDisplay.appendChild(a).appendChild(div1).appendChild(div2).appendChild(title);
      console.log(title);
      console.log(url);
    }
  })
  console.log(response);
}
