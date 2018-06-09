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
<<<<<<< HEAD
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
=======
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
>>>>>>> 642ae8a1142ab72995b543a91d556d42d53bd437
