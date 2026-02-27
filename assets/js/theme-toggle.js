const themeSelect = document.getElementById("theme-select");
const savedTheme = localStorage.getItem("theme") || "light";

// Apply saved theme
document.documentElement.setAttribute("data-theme", savedTheme);
themeSelect.value = savedTheme;

// When user changes theme
themeSelect.addEventListener("change", function () {
  const selectedTheme = this.value;
  document.documentElement.setAttribute("data-theme", selectedTheme);
  localStorage.setItem("theme", selectedTheme);
});
