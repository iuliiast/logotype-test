const burgerMenu = document.getElementById("burger_menu");
const nav = document.getElementById("nav");
const closeBtn = document.getElementById("close_btn");

burgerMenu.addEventListener("click", () => {
  document.body.classList.add("body_hidden");
  nav.classList.add("is_open");
});

closeBtn.addEventListener("click", () => {
  document.body.classList.remove("body_hidden");
  nav.classList.remove("is_open");
});

document.addEventListener("click", function (e) {
  if (
    burger_menu.contains(e.target) === false &&
    nav.contains(e.target) === false
  ) {
    nav.classList.remove("is_open");
    document.body.classList.remove("body_hidden");
  }
});
