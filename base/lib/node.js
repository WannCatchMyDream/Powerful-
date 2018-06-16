/**
 * @fileOverview HTML 元素或节点常用函数
 */

/**
 * 清空节点
 * @private
 * @param  {HTMLElement} node 待清空的节点
 * @return {void}
 */
function emptyNode(node) {
  node.textContent = '';
}
