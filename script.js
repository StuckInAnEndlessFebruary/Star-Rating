let star1 = document.getElementById("01");
let star2 = document.getElementById("02");
let star3 = document.getElementById("03");
let star4 = document.getElementById("04");
let star5 = document.getElementById("05");
// Select the SVG elements by their tag name
var paths = document.getElementsByTagName("path");

var isClicked1 = false; // Flag to track if the star has been clicked

star1.onmouseover = function () {
  for (var i = 0; i < 2; i++) {
    // Change the fill color
    paths[i].setAttribute("fill", "#ce8978");
  }
  for (var i = 2; i < paths.length; i++) {
    paths[i].setAttribute("fill", "#bec2cf");
  }
};

star1.onmouseleave = function () {
  if (!isClicked1) {
    // Only change the color back if the star hasn't been clicked
    for (var i = 0; i < 2; i++) {
      // Change the fill color
      paths[i].setAttribute("fill", "#bec2cf");
    }
  }
};

star1.onclick = function () {
  isClicked1 = true;
  isClicked2 = false;
  isClicked3 = false;
  isClicked4 = false;
  isClicked5 = false;
  for (var i = 0; i < 2; i++) {
    // Change the fill color
    paths[i].setAttribute("fill", "#ce8978");
  }
  for (var i = 2; i < paths.length; i++) {
    paths[i].setAttribute("fill", "#bec2cf");
  }
};

var isClicked2 = false; // Flag to track if the star has been clicked

star2.onmouseover = function () {
  for (var i = 0; i < 4; i++) {
    // Change the fill color
    paths[i].setAttribute("fill", "#e6aa56");
  }
  for (var i = 4; i < paths.length; i++) {
    paths[i].setAttribute("fill", "#bec2cf");
  }
};

star2.onmouseleave = function () {
  if (!isClicked2) {
    // Only change the color back if the star hasn't been clicked
    for (var i = 0; i < 4; i++) {
      // Change the fill color
      paths[i].setAttribute("fill", "#bec2cf");
    }
  }
};

star2.onclick = function () {
  isClicked1 = false;
  isClicked2 = true;
  isClicked3 = false;
  isClicked4 = false;
  isClicked5 = false;
  for (var i = 0; i < 4; i++) {
    // Change the fill color
    paths[i].setAttribute("fill", "#e6aa56");
  }
  for (var i = 4; i < paths.length; i++) {
    paths[i].setAttribute("fill", "#bec2cf");
  }
};

var isClicked3 = false; // Flag to track if the star has been clicked

star3.onmouseover = function () {
  for (var i = 0; i < 6; i++) {
    // Change the fill color
    paths[i].setAttribute("fill", "#f0eb66");
  }
  for (var i = 6; i < paths.length; i++) {
    paths[i].setAttribute("fill", "#bec2cf");
  }
};

star3.onmouseleave = function () {
  if (!isClicked3) {
    // Only change the color back if the star hasn't been clicked
    for (var i = 0; i < 6; i++) {
      // Change the fill color
      paths[i].setAttribute("fill", "#bec2cf");
    }
  }
};

star3.onclick = function () {
  isClicked1 = false;
  isClicked2 = false;
  isClicked3 = true;
  isClicked4 = false;
  isClicked5 = false;
  for (var i = 0; i < 6; i++) {
    // Change the fill color
    paths[i].setAttribute("fill", "#f0eb66");
  }
  for (var i = 6; i < paths.length; i++) {
    paths[i].setAttribute("fill", "#bec2cf");
  }
};

var isClicked4 = false; // Flag to track if the star has been clicked

star4.onmouseover = function () {
  for (var i = 0; i < 8; i++) {
    // Change the fill color
    paths[i].setAttribute("fill", "#84f066");
  }
  for (var i = 8; i < paths.length; i++) {
    paths[i].setAttribute("fill", "#bec2cf");
  }
};

star4.onmouseleave = function () {
  if (!isClicked4) {
    // Only change the color back if the star hasn't been clicked
    for (var i = 0; i < 8; i++) {
      // Change the fill color
      paths[i].setAttribute("fill", "#bec2cf");
    }
  }
};

star4.onclick = function () {
  isClicked1 = false;
  isClicked2 = false;
  isClicked3 = false;
  isClicked4 = true;
  isClicked5 = false;
  for (var i = 0; i < 8; i++) {
    // Change the fill color
    paths[i].setAttribute("fill", "#84f066");
  }
  for (var i = 8; i < paths.length; i++) {
    paths[i].setAttribute("fill", "#bec2cf");
  }
};

var isClicked5 = false; // Flag to track if the star has been clicked

star5.onmouseover = function () {
  for (var i = 0; i < paths.length; i++) {
    // Change the fill color
    paths[i].setAttribute("fill", "#00ff40");
  }
};

star5.onmouseleave = function () {
  if (!isClicked5) {
    // Only change the color back if the star hasn't been clicked
    for (var i = 0; i < paths.length; i++) {
      // Change the fill color
      paths[i].setAttribute("fill", "#bec2cf");
    }
  }
};

star5.onclick = function () {
  isClicked1 = false;
  isClicked2 = false;
  isClicked3 = false;
  isClicked4 = false;
  isClicked5 = true;
  for (var i = 0; i < paths.length; i++) {
    // Change the fill color
    paths[i].setAttribute("fill", "#00ff40");
  }
};
