function parallax(layer, distance, speed) {
  const item = document.querySelector(layer);
  item.style.transform = "translateY(" + -distance * speed + "px)";
}
// layer - layer to add parallax to
// distance - how much we scroll
// speed - speed change (negative for slower, positive faster)

// horizontal parallax
function hrparallax(layer, distance, speed) {
  const item = document.querySelector(layer);
  item.style.transform = "translateX(" + -distance * speed + "px)";
}

// add scroll event listener so the function gets triggered on scroll
document.addEventListener("scroll", function () {
  // arguments are layer, distance (how much we scroll) and scroll speed
  parallax(".l1", window.scrollY, 0.5);
  parallax(".l3", window.scrollY, -0.5);
  hrparallax(".l4", window.scrollY, -0.5);
  hrparallax(".l5", window.scrollY, 0.5);
});
