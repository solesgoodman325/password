// check.js
(function () {
  const referer = document.referrer.toLowerCase();

  const isFanbox = referer.includes("fanbox");
  const isPatreon = referer.includes("patreon");

  if (isFanbox || isPatreon) {
    document.documentElement.classList.add("allowed");
  } else {
    window.location.replace("error.html");
  }
})();
