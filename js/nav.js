const checkbox = document.querySelector(".navigation__checkbox");
const background = document.querySelector(".navigation__background");
const links = document.querySelectorAll(".navigation__links");
const body = document.getElementsByTagName("body")[0];
let menuOpen = false;

// menuBtn.addEventListener("click", () => {
//   if (!menuOpen) {
//     modOver.classList.add("checked");
//     menuOpen = true;
//     body.style.overflowY = "hidden";
//   } else {
//     menuOpen = false;
//     modOver.classList.remove("open-modal");
//     body.style.overflowY = "visible";
//   }
// });

window.onload = function () {
  links.style.color = "red";
};

// checkbox.addEventListener("click", () => {
//   if (!menuOpen) {
//     // background.classList.add("checked");
//     // body.style.overflowY = "hidden";
//     links.style.color = "red";
//   }
// });

// $(".navigation__checkbox").click(function () {
//   $(".navigation__item a").css("display", "inline-block");
//   $(".navigation__background").addClass("checked");
// });

// $("a").click(function () {
//   $("nav").removeClass("open-modal");
//   $(".nav").removeClass("open");
//   menuOpen = false;
// });

// $(".modal__btns").click(function () {
//   body.style.overflowY = "visible";
//   menuOpen = false;
// });
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
