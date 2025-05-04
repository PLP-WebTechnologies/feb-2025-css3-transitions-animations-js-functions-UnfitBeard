// Animate button with class toggle
document.getElementById("animateBtn").addEventListener("click", () => {
  const btn = document.getElementById("animateBtn");
  btn.classList.remove("bounce"); // Restart animation
  void btn.offsetWidth;           // Force reflow
  btn.classList.add("bounce");
});

// Save & load theme using localStorage
const themeSelect = document.getElementById("themeSelect");

// Apply stored theme on page load
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  const savedName = localStorage.getItem("username");

  if (savedTheme) {
    document.body.classList.toggle("dark", savedTheme === "dark");
    themeSelect.value = savedTheme;
  }

  if (savedName) {
    document.getElementById("welcomeMsg").textContent = `👋 Welcome back, ${savedName}!`;
  }
};

// Change theme & store in localStorage
themeSelect.addEventListener("change", () => {
  const theme = themeSelect.value;
  document.body.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
});

// Save user name
function saveName() {
  const name = document.getElementById("username").value.trim();
  if (name) {
    localStorage.setItem("username", name);
    document.getElementById("welcomeMsg").textContent = `👋 Welcome, ${name}!`;
  }
}
