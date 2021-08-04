const checkbox = document.querySelector(".navigation__checkbox");

const body = document.getElementsByTagName("body")[0];
let menuOpen = false;

checkbox.addEventListener("click", () => {
  if (!menuOpen) {
    body.style.overflowY = "hidden";
    menuOpen = true;
  } else {
    body.style.overflowY = "visible";
    menuOpen = false;
  }
});

$(".navigation__checkbox").click(function () {
  $(".navigation__item a").toggle();
});
