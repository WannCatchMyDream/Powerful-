/**
 * jsonp 发请求
 *
 * @public
 *
 * @param  {string} url     JSONP 对应的 API 地址
 * @param  {Object} options
 * @return {void}
 */
function jsonp(url, options) {
  const queryKey = options.queryKey;
  const queryValue = options.queryValue;

  const callbackKey = options.callbackKey;
  const callbackValue = options.callbackValue;
 if (buttonValue.value == '优酷视频'){
    var script = document.createElement('script');
    script.src = url + '?' + callbackKey + '=' + callbackValue + '&' + queryKey + '=' + queryValue;
  }else if (buttonValue.value == '腾讯视频'){
    var script = document.createElement('script');
    script.src = url + '?' + callbackKey + '=' + callbackValue + '&' + '&auto_id=938&otype=json';
  }

  document.querySelector('head').appendChild(script);
}
