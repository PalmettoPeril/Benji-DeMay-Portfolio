const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".nav-toggle");

if (toggle && sidebar) {
  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}