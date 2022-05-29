let toggleBtn = document.querySelector(".toggle-btn");
let closeBtn = document.querySelector(".close-btn");
let sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
