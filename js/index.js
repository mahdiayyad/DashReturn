"use strict";
let mySidenav = document.getElementById("mySidenav");
let modal = document.getElementById("myModal");
let readMoreBtn = document.getElementById("readMoreBtn");
let span = document.getElementsByClassName("close")[0];

$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
});

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

$(".testi5").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  navText: [
    '<i class="icon-arrow-left"></i>',
    '<i class="icon-arrow-right"></i>',
  ],
  dots: true,
  autoplay: true,
  center: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    1024: {
      items: 3,
    },
  },
});
