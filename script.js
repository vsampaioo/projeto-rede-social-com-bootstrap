const toggleBtn = document.getElementById("toggle-dark");
const body = document.body;

if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
  toggleBtn.checked = true;
}

toggleBtn.addEventListener("change", () => {
  if (toggleBtn.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "disabled");
  }
});
