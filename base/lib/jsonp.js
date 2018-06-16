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

  const script = document.createElement('script');
  script.src = url + '?' + callbackKey + '=' + callbackValue + '&' + queryKey + '=' + queryValue;

  document.querySelector('head').appendChild(script);
}
