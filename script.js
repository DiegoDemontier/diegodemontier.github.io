const button = document.querySelector(".header_btn");
const navbar = document.querySelector(".navbar");
const animated = document.querySelectorAll(".animated");
const options = document.querySelectorAll(".animated");


const toggleMenu = () => {
  navbar.classList.toggle("toggle")
  for (let index = 0; index < animated.length; index += 1) {
    animated[index].classList.toggle("animated")
  }
}

button.addEventListener('click', toggleMenu)
options[0].addEventListener('click', toggleMenu)
options[1].addEventListener('click', toggleMenu)
options[2].addEventListener('click', toggleMenu)

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  loop: true
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  loop: true
});
