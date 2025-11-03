let lastScrollTop = 0;
const header = document.querySelector("header");
window.addEventListener("scroll", function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  header.style.top = (scrollTop > lastScrollTop && scrollTop > 100) ? "-80px" : "0";
  lastScrollTop = scrollTop;
});

document.addEventListener("mousemove", function(e) {
  if (e.clientY < 50) header.style.top = "0";
});
