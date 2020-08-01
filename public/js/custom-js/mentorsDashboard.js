           //pagination
// Get the container element
var page = document.getElementById("pagination");

// Get all buttons with class="btn" inside the container
var btns = page.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

        // button pagination
// Get the container element
var rowThree = document.getElementById("rowThree");

// Get all buttons with class="m-btn" in row3
var mBtns = rowThree.getElementsByClassName("m-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < mBtns.length; i++) {
  mBtns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("btn-active");
    current[0].className = current[0].className.replace(" btn-active", "");
    this.className += " btn-active";
  });
}