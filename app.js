// reponsive navigation

const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav");
const navlinks = document.querySelectorAll(".nav ul li");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  menu.classList.toggle("hide");
  close.classList.toggle("show");
  document.body.classList.toggle("no-scroll");
});
navlinks.forEach((el) =>
  el.addEventListener("click", function (e) {
    nav.classList.toggle("open");
    menu.classList.toggle("hide");
    close.classList.toggle("show");
    document.body.classList.toggle("no-scroll");
  })
);

var swiper = new Swiper(".swiper", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".swiper2", {


  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});
