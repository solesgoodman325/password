// check.js
(function () {
  const referer = document.referrer.toLowerCase();

  if (referer.includes("fanbox")) {
    // 显示受保护内容
    document.documentElement.classList.add("allowed");
  } else {
    // 非法来源，直接跳转
    window.location.replace("error.html");
  }
})();
