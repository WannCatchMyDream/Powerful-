//未输入时显示热搜 hotResponseArray:保存了热搜关键字的数组。
function textDisplay(){
  var script = document.createElement('script');
  script.src = 'http://tip.soku.com/search_tip_1?jsoncallback=hotSearch&query=';
  document.querySelector('head').appendChild(script);
}

function jsonp(value){
  var script = document.createElement('script');
  script.src = 'http://tip.soku.com/search_tip_1?jsoncallback=hotSearch&query=' + value;
  document.querySelector('head').appendChild(script);
}
/**
 * 处理和渲染优酷下拉提示
 * @param  {Object} response 优酷下拉提示返回值
 * @return {void}
 */
function hotSearch(response) {
  const suggestions = response.r.map(function (item) {
    return item.w;
  });

    render(suggestions);
  }

const input = document.getElementById('text');
const suggestionList = document.getElementById('suggestionList')

/**
 * 渲染下拉提示
 * @param  {string[]} suggestions 下拉提示列表
 * @return {void}
 */
function render(suggestions) {
  cleanSuggestions(suggestionList)
  var n = 1;
  for (var i = 0, length = suggestions.length; i < length; i++) {
    var select = (suggestions[i].split(input.value));
    console.log(select);
    var displayTag = document.createElement("li");
    var numDisplay = document.createElement("span");
    var forClick = document.createElement("a");
    forClick.href='javascript:void(0)';

    // 事件委托了解下
    forClick.onclick = function(){ input.value = displayValue[0];};

    var number = document.createTextNode(n);
    var textValue = input.value;
    var textNodeValue = document.createTextNode(textValue);
    displayTag.appendChild(forClick).appendChild(numDisplay).appendChild(number)

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

      // 这行诡异的代码只有你看得懂
      var displayValue = suggestions[i].split("。");
    }

    if(select[0] != '' && select[1] != ''){
      selectNode = document.createTextNode(suggestions[i]);
      displayTag.appendChild(forClick).appendChild(selectNode);
    }

    if (n < 4) {
      numDisplay.style = "color:red;"
    }

      suggestionList.appendChild(displayTag);
      n = n + 1;
  }
}

function skip(){
  var urL = 'http://so.youku.com/search_video/q_' + input.value + '?';
  console.log(urL);
  window.location.assign(urL);
}

function cleanSuggestions(suggestionList){
  emptyNode(suggestionList);
}

