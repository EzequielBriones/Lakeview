const menuNav = document.querySelector(".nav");
const modOver = document.querySelector(".modal");
const menuBtn = document.querySelector(".nav__button");
const body = document.getElementsByTagName("body")[0];

let menuOpen = false;

menuBtn.addEventListener("click", function () {
  modal();
});

menuNav.addEventListener("click", function () {
  modal();
});

function modal() {
  if (!menuOpen) {
    menuNav.classList.add("open");
    modOver.classList.add("open-modal");
    menuOpen = true;
    body.style.overflowY = "hidden";
  } else {
    menuNav.classList.remove("open");
    menuOpen = false;
    modOver.classList.remove("open-modal");
    body.style.overflowY = "visible";
  }
}

$("a").click(function () {
  $("nav").removeClass("open-modal");
  $(".nav").removeClass("open");
  menuOpen = false;
  body.style.overflowY = "visible";
});
