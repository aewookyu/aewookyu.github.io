document.addEventListener("DOMContentLoaded", function () {
  const footnotes = document.querySelectorAll(".footnote-ref");

  footnotes.forEach(ref => {
    const footnoteID = ref.getAttribute("href").replace("#", "");
    const footnoteContent = document.getElementById(footnoteID);

    if (footnoteContent) {
      const popup = document.createElement("div");
      popup.className = "footnote-popup";
      popup.innerHTML = footnoteContent.innerHTML;
      document.body.appendChild(popup);

      ref.addEventListener("mouseenter", (e) => {
        popup.style.display = "block";
        popup.style.left = e.pageX + 10 + "px";
        popup.style.top = e.pageY + 10 + "px";
      });

      ref.addEventListener("mousemove", (e) => {
        popup.style.left = e.pageX + 10 + "px";
        popup.style.top = e.pageY + 10 + "px";
      });

      ref.addEventListener("mouseleave", () => {
        popup.style.display = "none";
      });
    }
  });
});
