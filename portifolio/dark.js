const toggleButton = document.getElementById("ModoE");

function enableDarkMode() {
  document.body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");
}

if (localStorage.getItem("theme") === "dark") {
  enableDarkMode();
}

// Alterna entre os modos ao clicar no botão
toggleButton.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});
