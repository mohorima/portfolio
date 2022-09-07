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


const swiper = new Swiper('.swiper', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
