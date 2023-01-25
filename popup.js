const toggle = document.getElementById("toggle");

toggle.addEventListener("change", () => {
  localStorage.setItem("toggle", toggle.checked);
});

