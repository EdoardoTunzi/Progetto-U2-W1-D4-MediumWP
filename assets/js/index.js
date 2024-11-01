window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const hero = document.querySelector(".hero");
  const btn = document.getElementById("getStarted");

  const headerHeight = header.offsetHeight;
  const heroBottom = hero.offsetTop + hero.offsetHeight;

  const offSet = 10;
  if (window.scrollY >= heroBottom - headerHeight - offSet) {
    header.style.backgroundColor = "#ffffff";
    btn.style.backgroundColor = "#1a8917";
  } else {
    header.style.backgroundColor = "#ffc017";
    btn.style.backgroundColor = "#191919";
  }
});
