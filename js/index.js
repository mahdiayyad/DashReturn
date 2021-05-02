"use strict";
let mySidenav = document.getElementById("mySidenav");
let modal = document.getElementById("myModal");
let readMoreBtn = document.getElementById("readMoreBtn");
let span = document.getElementsByClassName("close")[0];
let headerWrapper = document.querySelector(".welcome-header");
let textWrapper = document.querySelector(".welcome-p");
let aboutHeaderWrapper = document.querySelector(".about-header .letters");

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

// Wrap every letter in a span

headerWrapper.innerHTML = headerWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='paragraph'>$&</span>"
);
anime
  .timeline({ loop: true })
  .add({
    targets: ".welcome-header .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".welcome-header",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

anime
  .timeline({ loop: true })
  .add({
    targets: ".welcome-p .paragraph",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 60 * i,
  })
  .add({
    targets: ".welcome-p",
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

aboutHeaderWrapper.innerHTML = aboutHeaderWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".about-header .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".about-header",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
