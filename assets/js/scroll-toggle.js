const scrollBtn = document.getElementById("scroll-toggle");

function updateButton() {
  const scrollPosition = window.scrollY;
  const pageHeight = document.body.scrollHeight;
  const windowHeight = window.innerHeight;

  if (scrollPosition + windowHeight > pageHeight - 200) {
    scrollBtn.textContent = "↑";
    scrollBtn.dataset.direction = "up";
  } else {
    scrollBtn.textContent = "↓";
    scrollBtn.dataset.direction = "down";
  }
}

scrollBtn.addEventListener("click", () => {
  if (scrollBtn.dataset.direction === "up") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
});

window.addEventListener("scroll", updateButton);
window.addEventListener("load", updateButton);
