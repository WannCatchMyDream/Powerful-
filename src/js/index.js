var Tvalue = document.getElementById("inp1").value;
var root1 = 'https://www.so.com/s?ie=utf-8&src=dlm&shb=1&hsid=5d5252ca3d1898fc&ls=n728b639592&q=' + Tvalue;
var urL = '\"' + root1 + '\"';

function chan1(textValue) {
  var script = document.createElement('script');
  script.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + textValue + '&cb=handleResponse';
  document.querySelector('head').appendChild(script);
}

// 无需每次获取，可用变量缓存之
// 而且放在 for 循环得多次获取，性能太低
const suggestionList = document.getElementById("ull");

function handleResponse(response) {
  // 渲染之前先清空老的数据
  // 为什么把清空操作写成函数吗？虽然才一行代码
  // 好处是：
  // 1. 可读性更强。写成 node.textContent = ''; 别人一眼看不上什么意思。写成 emptyNode(suggestionList); 就知道原来是清空节点呀
  // 2. 易于重构。清空节点有四种写法，假如某天你发现别的方法效率更高你可以只修改该函数，使用到该函数的地方无需一一改动
  // 3. 便于测试。单测的最小单元是函数
  clearSuggestions(suggestionList);

  for (i = 0; i < response.s.length; i++) {
    var node = document.createElement("li");
    var text = document.createTextNode(response.s[i]);
    node.appendChild(text);
    console.log(response.s[i]);
    suggestionList.appendChild(node);
  }
}

/**
 * 清空下拉提示
 * @private
 * @param  {HTMLElement} node 待清空的下拉提示节点
 * @return {void}
 */
function clearSuggestions(suggestionList) {
  emptyNode(suggestionList);
}
