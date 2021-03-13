"use strict";
let mySidenav = document.getElementById("mySidenav");
let modal = document.getElementById("myModal");
let readMoreBtn = document.getElementById("readMoreBtn");
let span = document.getElementsByClassName("close")[0];

function openNav() {
  mySidenav.style.width = "250px";
}

function closeNav() {
  mySidenav.style.width = "0";
}

// When the user clicks the button, open the modal
readMoreBtn.onclick = function () {
  modal.style.display = "block";
  modal.classList.add("showModal");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  modal.classList.remove("showModal");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal.classList.remove("showModal");
  }
};
