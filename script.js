const button = document.querySelector(".header_btn");
const navbar = document.querySelector(".header_navbar");


const toggleMenu = () => {
  if( event.type === 'touchstart') event.preventDefault();
  navbar.classList.toggle("toggle")
}

button.addEventListener('click', toggleMenu)
button.addEventListener('click', toggleMenu)

