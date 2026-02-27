const scrollBtn = document.getElementById("scroll-toggle");
const chapter = document.querySelector(".chapter-content");

function updateButton() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  const chapterBottom =
    chapter.offsetTop + chapter.offsetHeight;

  // If near bottom of chapter → show UP
  if (scrollPosition + windowHeight > chapterBottom - 100) {
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
    window.scrollTo({
      top: chapter.offsetTop + chapter.offsetHeight,
      behavior: "smooth"
    });
  }
});

window.addEventListener("scroll", updateButton);
window.addEventListener("load", updateButton);
