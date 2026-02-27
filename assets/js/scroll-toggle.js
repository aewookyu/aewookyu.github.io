const scrollBtn = document.getElementById("scroll-toggle");
const chapter = document.querySelector(".chapter-content");

if (scrollBtn && chapter) {

  function updateButton() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    const chapterBottom =
      chapter.offsetTop + chapter.offsetHeight;

    // Hide when near top
    if (scrollPosition < 150) {
      scrollBtn.style.opacity = "0";
      scrollBtn.style.pointerEvents = "none";
    } else {
      scrollBtn.style.opacity = "0.85";
      scrollBtn.style.pointerEvents = "auto";
    }

    // Change arrow direction
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
}
