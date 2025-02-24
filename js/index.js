let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');


  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
  } )

 // Troca de imagem a cada 3 segundos

const buttonOn=document.getElementById('open-btn-mobile')
const buttonClose=document.getElementById('open-close-mobile')
const menuMobile=document.getElementById('menu')

buttonOn.addEventListener('click', () => {
    menuMobile.classList.add('open')
})

buttonClose.addEventListener('click', () => {
    menuMobile.classList.remove('open')
})

setInterval(nextSlide, 3000)