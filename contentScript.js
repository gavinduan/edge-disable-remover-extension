// 更新后的目标元素选择器
const targetSelector = 'body > div:nth-child(11) > div > div.dp-table-cell.v-middle > div > div.popup-content-ctnr > div > div.btn-wrap > button.bl-button.bl-button--shallow.bl-button--size';

// 检查并移除disabled属性的函数
function checkAndRemoveDisable() {
  const targetElement = document.querySelector(targetSelector);
  
  if (targetElement) {
    if (targetElement.hasAttribute('disabled')) {
      targetElement.removeAttribute('disabled');
      console.log('已移除目标元素的disabled属性');
    }
  }
}

// 立即执行一次检查
checkAndRemoveDisable();

// 设置定时器定期检查
setInterval(checkAndRemoveDisable, 300);

// 监听DOM变化，当页面结构改变时重新检查
const observer = new MutationObserver(checkAndRemoveDisable);
observer.observe(document.body, {
  childList: true,
  subtree: true
});
