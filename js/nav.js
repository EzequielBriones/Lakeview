const menuBtn = document.querySelector(".nav");
const modOver = document.querySelector(".modal");
const body = document.getElementsByTagName("body")[0];
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    modOver.classList.add("open-modal");
    menuOpen = true;
    body.style.overflowY = "hidden";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    modOver.classList.remove("open-modal");
    body.style.overflowY = "visible";
  }
});

$("a").click(function () {
  $("nav").removeClass("open-modal");
  $(".nav").removeClass("open");
  menuOpen = false;
});

$(".modal__btns").click(function () {
  body.style.overflowY = "visible";
  menuOpen = false;
});
// $(".nav").click(function () {
//   if (!menuOpen) {
//     $(".nav button").addClass("open");
//     menuOpen = true;
//   } else {
//     $(".nav button").removeClass("open");
//     menuOpen = false;
//   }
// });

// window.onload = function () {
//   let menuBtn = document.querySelector(".nav");
//   menuBtn.addEventListener("click", agregar_clase);
// };

// function agregar_clase() {
//   let menuBtns = document.querySelector(".nav__button");
//   menuBtns.classList.toggle("open");
// }
