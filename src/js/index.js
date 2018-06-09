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
    var node = document.createElement("li");//创建li标签
    var anode = document.createElement("a"); //创建a标签
    anode.style = "text-decoration:none;color:black";
    anode.href = "javascript:void(0)";
    anode.onclick = function(){addin();};
    var tvalue = document.getElementById("inp1").value;
    const sp =(response.s[i]).split(tvalue);
    const bt = document.createElement("b");
    bt.style.color = "purple";
    node.appendChild(bt);
    if((sp[0] == ""||sp[1] =="") && sp.length >= 2){
      //实现关键字的高亮
      var nodevalue =tvalue;
      var text = document.createTextNode(nodevalue);
      var text1 = document.createTextNode(sp[1])
      console.log('<b>' + tvalue + '</b>' + sp[1]);
      console.log(response.s);
      node.appendChild(anode).appendChild(bt).appendChild(text);
      node.appendChild(anode).appendChild(text1);
      suggestionList.appendChild(node);
    }
    //实现输入框内容替换
    function addin(){
      document.getElementById("inp1").value =tvalue + sp[1]; 
    }
    function skip(){
      var lll = tvalue + sp[1];
      var urL = "https://www.so.com/s?ie=utf-8&src=dlm&shb=1&hsid=c93169bd520917ab&ls=n728b639592&q=" + lll;
      console.log(urL);
      window.location.assign(urL)
    }
  }
}
//清空
function emptyNode(node) {
  node.textContent = '';
}
//
