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

var galleryThumbs = new Swiper(".gallery-thumbs", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "2",
  // coverflowEffect: {
  //   rotate: 50,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows : true,
  // },

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 50,
    modifier: 6,
    slideShadows: false,
  },
});

var galleryTop = new Swiper(".swiper-container.testimonial", {
  speed: 400,
  spaceBetween: 50,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  direction: "vertical",
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
    type: "bullets",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});
