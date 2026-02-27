document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;
  const increaseBtn = document.getElementById("increase-font");
  const decreaseBtn = document.getElementById("decrease-font");

  let currentSize = localStorage.getItem("fontSize") || 18;

  root.style.setProperty("--base-font-size", currentSize + "px");

  increaseBtn.addEventListener("click", function () {
    currentSize = parseInt(currentSize) + 2;
    root.style.setProperty("--base-font-size", currentSize + "px");
    localStorage.setItem("fontSize", currentSize);
  });

  decreaseBtn.addEventListener("click", function () {
    if (currentSize > 14) {
      currentSize = parseInt(currentSize) - 2;
      root.style.setProperty("--base-font-size", currentSize + "px");
      localStorage.setItem("fontSize", currentSize);
    }
  });
});
