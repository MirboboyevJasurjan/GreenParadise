const menu = document.querySelector('.menu');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu.classList.remove('active');
  }
});








$(document).ready(function(){
  $('.services-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:3
      }
    }
  })
});
