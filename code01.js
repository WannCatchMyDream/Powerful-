const n = 1;
function render(responseArray,inputID,ulID){
  for (var i = 0; i < responseArray.length; i++){
    const select = (responseArray[i].split(textValue));
    if((select[0] == ''||select[1] = '')&& select.length >=2){
      var displayTag = document.createElement("li");
      var highLight = document.createElement("b");
      var numDisplay = document.createELement("span");
      var forClick = document.createElement("a");
      forClick.href='javascript:void(0)';
      forClick.onclick = function(){document.getElementById(inputID).value = displayValue[0];};
      var number = document.createTextNode(n);
      var textValue = document.getElementById(inputID).value;
      var ulTag = document.getElementById(ulID);
      var textNodeValue = document.createTextNode(textValue);
      const displayValue = responseArray[i].split("。");
      if(n < 4){
        numDisplay.style = "color:red;"
      }
      displayTag.appendChild(forClcik).appendChild(numDisplay).appendChild(number);
      displayTag.appendChild(forClick).appendChild(highLight).appendChild(textNodeValue);
      ulTag.appendChild(displayTag);
      n = n + 1;
    }
  }
}

//未输入时显示热搜 hotResponseArray:保存了热搜关键字的数组。
function textDisplay(){
  var script = document.createElement('script');
  script.src = 'http://tip.soku.com/search_tip_1?jsoncallback=hotSearch&query=';
  document.querySelector('head').appendChild(script);
}
function hotsearch(hotResponse){}
//未输入时显示热搜 hotResponseArray:保存了热搜关键字的数组。
function (ulID,Array){
  var listDisplay = document.getElementById(ulID);
  for(var h = 0; h < hotResponse.length; h++){
  }
}



/**
 * 
 */