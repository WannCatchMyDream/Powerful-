function jsonp(textValue) {
  var script = document.createElement('script');
  script.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + textValue + '&cb=handleResponse';
  document.querySelector('head').appendChild(script);
}

// 无需每次获取，可用变量缓存之
// 而且放在 for 循环得多次获取，性能太低
const suggestionList = document.getElementById("forDisplay");

function handleResponse(response) {
  // 渲染之前先清空老的数据
  // 为什么把清空操作写成函数吗？虽然才一行代码
  // 好处是：
  // 1. 可读性更强。写成 node.textContent = ''; 别人一眼看不上什么意思。写成 emptyNode(suggestionList); 就知道原来是清空节点呀
  // 2. 易于重构。清空节点有四种写法，假如某天你发现别的方法效率更高你可以只修改该函数，使用到该函数的地方无需一一改动
  // 3. 便于测试。单测的最小单元是函数
  clearSuggestions(suggestionList);
  var l = 1;
  for (i = 0; i < response.s.length; i++) {
    // 创建 li 标签
    var node = document.createElement("li");
    // 创建a标签
    var anode = document.createElement("a");
    anode.style = "text-decoration:none;color:black";
    anode.href = "javascript:void(0)";
    anode.onclick = function(){addin();};
    var tvalue = document.getElementById("text").value;
    const sp =(response.s[i]).split(tvalue);
    //创建<b>及样式
    const bt = document.createElement("b");
    bt.style.color = "purple";
    node.appendChild(bt);
    // 创建<span>标签及样式
    const redNum = document.createElement("span");
    redNum.style="color:red";
    if((sp[0] == ""||sp[1] =="") && sp.length >= 2){
      // 实现关键字的高亮
      var nodevalue =tvalue;
      var text = document.createTextNode(nodevalue);
      var text1 = document.createTextNode(sp[1]);
      var text2 = document.createTextNode(l + " ");
      l = l + 1;
      if(l < 3){
        node.appendChild(anode).appendChild(redNum).append(text2);
      }else{
      node.appendChild(anode).appendChild(text2);
      }
      node.appendChild(anode).appendChild(bt).appendChild(text);
      node.appendChild(anode).appendChild(text1);
      suggestionList.appendChild(node);
      }
    // 实现输入框内容替换
    function addin(){
      document.getElementById("text").value = tvalue + sp[1];
    }
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

function skip(){
  var textvalue = document.getElementById("text").value;
  var urL = "https://www.so.com/s?ie=utf-8&src=dlm&shb=1&hsid=c93169bd520917ab&ls=n728b639592&q=" + textvalue;
  console.log(urL);
  window.location.assign(urL);
}

//测试名字有点随意了。词汇量
 function textDisplay(){
  var script = document.createElement('script');
  script.src = 'http://tip.soku.com/search_tip_1?jsoncallback=hotSearch&query=';
  document.querySelector('head').appendChild(script);
  }

function hotSearch(hotResponse){
  clearSuggestions(suggestionList);

  var listDisplay = document.getElementById("forDisplay");
  for(var h = 0; h < hotResponse.r.length ; h++){
    // var s[h = hotResponse.r[h].w;  报错类型：Uncaught SyntaxError: Unexpected token [
    var redSpan = document.createElement("span");
    if(h + 1 < 4){
      redSpan.style = "color:red";
    }
    var Anode = document.createElement("a");
    Anode.href="javascript:void(0)";
    Anode.style="text-decoration: none;color:black";
    Anode.onclick = function(){Addin()};
    var liDisplay = document.createElement("li");
    var tnode = document.createTextNode(h + 1 + ' ');
    var tNode = document.createTextNode(hotResponse.r[h].w);
    const displayValue = (hotResponse.r[h].w).split("。");
    const numBefore = liDisplay.appendChild(Anode).appendChild(tNode);
    liDisplay.appendChild(Anode).appendChild(redSpan).appendChild(tnode);
    liDisplay.appendChild(Anode).appendChild(numBefore);
    listDisplay.appendChild(liDisplay);

    function Addin(){
      document.getElementById("text").value = displayValue[0];
    }
  }

  function clearSuggestions(){
    emptyNode(suggestionList);
  }
}

// 还有一个bug解决不了
