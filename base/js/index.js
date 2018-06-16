const input = document.getElementById('text');
const suggestionList = document.getElementById('suggestionList');
const nav = document.getElementById('li');

suggestionList.addEventListener('click',function(event){
  var target = event.target;
   console.log('target:', target);
   if (target.nodeName === 'A' ){
    input.value = target.textContent;
  }else if (target.nodeName === 'B'){
    input.value =target.parentNode.textContent;
  }
});

input.addEventListener('click', (event) => {
  console.log('click event.target.value:', event.target.value);
  const value = event.target.value;

  if (value === '') {
    // 展示热搜十条
    showHotSearches();
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
    youkuJsonp({
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
  return response.r.map(function (item) {
    return item.w;
  });
}

/**
 * 优酷下拉提示 JSONP 接口
 * @param  {Object} options 包含 query 和 callbackFunctionName 的对象
 * @return {void}
 */
function youkuJsonp(options) {
  const query = options.query;
  const callbackFunctionName = options.callbackFunctionName;

  // 最后拼接为 http://tip.soku.com/search_tip_1?jsoncallback=x&query=y
  jsonp('http://tip.soku.com/search_tip_1', {
    queryKey: 'query',
    queryValue: query,

    callbackKey: 'jsoncallback',
    callbackValue: callbackFunctionName,
  });
}

/**
 * 展示下拉提示
 * @param  {string} query 用户输入的查询词
 * @return {void}
 */
function showSuggestions(query) {
  youkuJsonp({
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

function changeSearchType(){
  var searchList = document.createElement("ul");
  searchList.style="display:inline"
  var li1 = document.createElement("li");
  li1.id="li1"
  var li2 = document.createElement("li");
  li2.id="l2"
  var aClick = document.createElement("a");
  aClick.href='javascript:void(0)';
  var tencent = document.createTextNode("腾讯视频");
  var youku = document.createTextNode("优酷视频");
  searchList.appendChild(li1).appendChild(aClick).appendChild(tencent);
  searchList.appendChild(li2).appendChild(aClick).appendChild(youku);
  nav.appendChild(searchList);
  nav.addEventListener('click',(event) => {
    target = event.target;
    searchButton(target.innerText);
  })
}

// 主要模块
function searchButton(tips){
  if(tips != "显示"){
    var buttonValue = document.getElementById('searchButton');
    buttonValue.value = target.innerText;
    console.log(buttonValue.value);
  }
  if(buttonValue.value="腾讯视频"){
    var url = 'https://v.qq.com/x/search/?q=' + input.value;
    window.location.assign(url);
    // 执行代码
  }else{
    // 执行代码
    var urL = 'http://so.youku.com/search_video/q_' + input.value + '?';
    console.log(urL);
    window.location.assign(urL);
  }
}

function cleanSuggestions(suggestionList){
  emptyNode(suggestionList);
}

// 未完成
/*
tencentJsonp('url', {
    queryKey: 'query',
    queryValue: query,

    callbackKey: 'jsoncallback',
    callbackValue: callbackFunctionName,
  });
  */
