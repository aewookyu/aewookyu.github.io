document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".footnote-ref").forEach(ref => {
    const content = ref.getAttribute("data-footnote");
    if (!content) return;

    const popup = document.createElement("div");
    popup.className = "footnote-popup";
    popup.innerHTML = content;
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
  });
});
