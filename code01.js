const n = 1;

//未输入时显示热搜 hotResponseArray:保存了热搜关键字的数组。
/*function textDisplay(){
  var script = document.createElement('script');
  script.src = 'http://tip.soku.com/search_tip_1?jsoncallback=hotSearch&query=';
  document.querySelector('head').appendChild(script);
} */

// 输入关键字搜索
function jsonp(value){
  var script = document.createElement("script");
  script.src = 'http://tip.soku.com/search_tip_1?jsoncallback=hotSearch&query=' + value;
  document.querySelector("head").appendChild(script);
}

/**
 * 处理和渲染优酷下拉提示
 * @param  {Object} response 优酷下拉提示返回值
 * @return {void}
 */
function hotSearch(response) {
  const suggstions = response.r.map(function (item) {
    return item.w;
  });

  render(suggstions);
}

const input = document.getElementById('text');
const suggestionList = document.getElementById('suggestionList')

/**
 * 渲染下拉提示
 * @param  {string[]} suggestions 下拉提示列表
 * @return {void}
 */
function render(suggestions) {
  for (var i = 0, length = suggestions.length; i < length; i++) {
    const select = (responseArray[i].split(textValue));

    if((select[0] == '' || select[1] == '') && select.length >= 2) {
      var displayTag = document.createElement("li");
      var highLight = document.createElement("b");
      var numDisplay = document.createELement("span");
      var forClick = document.createElement("a");

      forClick.href='javascript:void(0)';

      // 事件委托了解下
      forClick.onclick = function(){ input.value = displayValue[0];};

      var number = document.createTextNode(n);
      var textValue = input.value;
      var textNodeValue = document.createTextNode(textValue);

      // 这行诡异的代码只有你看得懂
      const displayValue = responseArray[i].split("。");

      if (n < 4) {
        numDisplay.style = "color:red;"
      }

      displayTag.appendChild(forClcik).appendChild(numDisplay).appendChild(number);
      displayTag.appendChild(forClick).appendChild(highLight).appendChild(textNodeValue);

      suggestionList.appendChild(displayTag);

      n = n + 1;
    }
  }
}


