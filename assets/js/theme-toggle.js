const themes = ["light", "dark", "sepia", "softnight", "paper"];
let currentThemeIndex = 0;

const savedTheme = localStorage.getItem("theme");

if (savedTheme && themes.includes(savedTheme)) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  currentThemeIndex = themes.indexOf(savedTheme);
} else {
  document.documentElement.setAttribute("data-theme", "light");
}

document.getElementById("theme-toggle").addEventListener("click", () => {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  const newTheme = themes[currentThemeIndex];

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});
