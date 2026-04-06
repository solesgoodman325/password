// check.js
(function () {
  const referer = document.referrer.toLowerCase();

  const isFanbox = referer.includes("fanbox");
  const isDiscord = referer.includes("discord");

  if (isFanbox || isDiscord) {
    document.documentElement.classList.add("allowed");
  } else {
    window.location.replace("error.html");
  }
})();
