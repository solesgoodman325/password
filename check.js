// check.js
window.onload = function() {
  const referer = document.referrer.toLowerCase(); // 获取referer
  const passwordPageRegex = /fanbox/; // 匹配含有“fanbox”字样的referer
  
  if (passwordPageRegex.test(referer)) {
    // 如果referer中包含"fanbox"
    return; // 继续加载password.html页面
  } else {
    // 如果referer中不包含"fanbox"
    window.location.href = "error.html"; // 重定向到错误页面
  }
};
