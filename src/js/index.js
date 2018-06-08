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
  emptyNode(suggestionList);

  for (i = 0; i < response.s.length; i++) {
    var node = document.createElement("li");
    var text = document.createTextNode(response.s[i]);
    node.appendChild(text);
    console.log(response.s[i]);
    suggestionList.appendChild(node);
  }
}

function emptyNode(node) {
  node.textContent = '';
}
