/* Shared UI behaviour: mobile menu toggle + active nav link */
(function () {
  function init() {
    var btn = document.getElementById("navToggle");
    var nav = document.getElementById("topnav");
    if (btn && nav) {
      btn.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
      /* close menu when a link is tapped */
      nav.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
          nav.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
        }
      });
    }
    /* mark the current page in the nav */
    var here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("#topnav a").forEach(function (a) {
      if (a.getAttribute("href") === here) a.classList.add("on");
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }
})();
