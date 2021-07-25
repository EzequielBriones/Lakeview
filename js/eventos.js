$(document).ready(function () {
  $(".img1").focusin(function () {
    $(".img1 img").addClass("composition__img--1-active");
  });
  $(".img1").focusout(function () {
    $(".img1 img").removeClass("composition__img--1-active");
  });
});

$(document).ready(function () {
  $(".img2").focusin(function () {
    $(".img2 img").addClass("composition__img--2-active");
  });
  $(".img2").focusout(function () {
    $(".img2 img").removeClass("composition__img--2-active");
  });
});

$(document).ready(function () {
  $(".img3").focusin(function () {
    $(".img3 img").addClass("composition__img--3-active");
  });
  $(".img3").focusout(function () {
    $(".img3 img").removeClass("composition__img--3-active");
  });
});
