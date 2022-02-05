const button = document.querySelector(".header_btn");
const navbar = document.querySelector(".navbar");
const animated = document.querySelectorAll(".animated");


const toggleMenu = () => {
  if( event.type === 'touchstart') event.preventDefault();
  navbar.classList.toggle("toggle")
  for (let index = 0; index < animated.length; index += 1) {
    animated[index].classList.toggle("animated")
  }
}

button.addEventListener('click', toggleMenu)
button.addEventListener('click', toggleMenu)

