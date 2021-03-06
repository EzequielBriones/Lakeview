/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////VARIABLES////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////  DOM  //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

const body = document.getElementsByTagName("body")[0];

///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  NAV  ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

const menuNav = document.querySelector(".nav");
const modOver = document.querySelector(".modal");
const menuBtn = document.querySelector(".nav__button");
let menuOpen = false;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////FUNCTIONS////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// CALL MODAL FUNCTION ON BTN CLICK  /////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

menuBtn.addEventListener("click", function () {
  modal();
});

menuNav.addEventListener("click", function () {
  modal();
});

///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// OPEN/CLOSE MODAL ON BTN CLICK /////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// CLOSE MODAL ON NAV LINK CLICK /////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

$("a").click(function () {
  $("nav").removeClass("open-modal");
  $(".nav").removeClass("open");
  menuOpen = false;
  body.style.overflowY = "visible";
});
