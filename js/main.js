/* Collapsibles */

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

/* shirts */

function color_black__shirts() {
  document.getElementById("color__switch--shirts").style.background = "black";
  document.getElementById("color__switch--shirts").style.color = "white";
  document.getElementById("color__switch--shirts").style.transition = "0.5s";
}

function color_white__shirts() {
  document.getElementById("color__switch--shirts").style.background = "white";
  document.getElementById("color__switch--shirts").style.color = "black";
  document.getElementById("color__switch--shirts").style.transition = "0.5s";
}

function color_navy__shirts() {
  document.getElementById("color__switch--shirts").style.background =
    "rgb(0, 0, 90)";
  document.getElementById("color__switch--shirts").style.color = "white";
  document.getElementById("color__switch--shirts").style.transition = "0.5s";
}

function color_green__shirts() {
  document.getElementById("color__switch--shirts").style.background = "#263429";
  document.getElementById("color__switch--shirts").style.color = "white";
  document.getElementById("color__switch--shirts").style.transition = "0.5s";
}

/* HATS */

function color_black__hats() {
  document.getElementById("color__switch--hats").style.background = "black";
  document.getElementById("color__switch--hats").style.color = "white";
  document.getElementById("color__switch--hats").style.transition = "0.5s";
}

function color_grey__hats() {
  document.getElementById("color__switch--hats").style.background = "#4b4b4b";
  document.getElementById("color__switch--hats").style.color = "white";
  document.getElementById("color__switch--hats").style.transition = "0.5s";
}

/* WATER BOTTLES */

function color_black__bottle() {
  document.getElementById("color__switch--bottle").style.background = "black";
  document.getElementById("color__switch--bottle").style.color = "white";
  document.getElementById("color__switch--bottle").style.transition = "0.5s";
}

function color_white__bottle() {
  document.getElementById("color__switch--bottle").style.background = "white";
  document.getElementById("color__switch--bottle").style.color = "black";
  document.getElementById("color__switch--bottle").style.transition = "0.5s";
}

/* buttons for sizes */

function size_selector_small() {
  document.getElementById("size--small").style.border =
    "4px solid rgb(222, 66, 49)";
  document.getElementById("size--medium").style.border = "none";
  document.getElementById("size--large").style.border = "none";
  document.getElementById("btn--buy_now--small").style.display = "initial";
  document.getElementById("btn--buy_now--medium").style.display = "none";
  document.getElementById("btn--buy_now--large").style.display = "none";
}

function size_selector_medium() {
  document.getElementById("size--small").style.border = "none";
  document.getElementById("size--medium").style.border =
    "4px solid rgb(222, 66, 49)";
  document.getElementById("size--large").style.border = "none";
  document.getElementById("btn--buy_now--small").style.display = "none";
  document.getElementById("btn--buy_now--medium").style.display = "initial";
  document.getElementById("btn--buy_now--large").style.display = "none";
}

function size_selector_large() {
  document.getElementById("size--small").style.border = "none";
  document.getElementById("size--medium").style.border = "none";
  document.getElementById("size--large").style.border =
    "4px solid rgb(222, 66, 49)";
  document.getElementById("btn--buy_now--small").style.display = "none";
  document.getElementById("btn--buy_now--medium").style.display = "none";
  document.getElementById("btn--buy_now--large").style.display = "initial";
}

/* Image selector */

function image_palisade1() {
  document.getElementById("image--palisade1").style.border =
    "4px solid rgb(222, 66, 49)";
  document.getElementById("image--palisade2").style.border = "4px solid white";
  document.getElementById("image--palisade3").style.border = "4px solid white";
}

function image_palisade2() {
  document.getElementById("image--palisade1").style.border = "4px solid white";
  document.getElementById("image--palisade2").style.border =
    "4px solid rgb(222, 66, 49)";
  document.getElementById("image--palisade3").style.border = "4px solid white";
}

function image_palisade3() {
  document.getElementById("image--palisade1").style.border = "4px solid white";
  document.getElementById("image--palisade2").style.border = "4px solid white";
  document.getElementById("image--palisade3").style.border =
    "4px solid rgb(222, 66, 49)";
}

function image_carmel1() {
  document.getElementById("image--carmel1").style.border = "4px solid black";
  document.getElementById("image--carmel2").style.border = "4px solid white";
  document.getElementById("image--carmel3").style.border = "4px solid white";
}

function image_carmel2() {
  document.getElementById("image--carmel1").style.border = "4px solid white";
  document.getElementById("image--carmel2").style.border = "4px solid black";
  document.getElementById("image--carmel3").style.border = "4px solid white";
}

function image_carmel3() {
  document.getElementById("image--carmel1").style.border = "4px solid white";
  document.getElementById("image--carmel2").style.border = "4px solid white";
  document.getElementById("image--carmel3").style.border = "4px solid black";
}

function image_atherton1() {
  document.getElementById("image--atherton1").style.border =
    "4px solid rgb(222, 66, 49)";
  document.getElementById("image--atherton2").style.border = "4px solid white";
  document.getElementById("image--atherton3").style.border = "4px solid white";
}

function image_atherton2() {
  document.getElementById("image--atherton1").style.border = "4px solid white";
  document.getElementById("image--atherton2").style.border =
    "4px solid rgb(222, 66, 49)";
  document.getElementById("image--atherton3").style.border = "4px solid white";
}

function image_atherton3() {
  document.getElementById("image--atherton1").style.border = "4px solid white";
  document.getElementById("image--atherton2").style.border = "4px solid white";
  document.getElementById("image--atherton3").style.border =
    "4px solid rgb(222, 66, 49)";
}
