const hamburger = document.querySelector('.hamburger'),
      menu =  document.querySelector('.menu__viezdm'),
      closeEm = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
} );

closeEm.addEventListener('click', () => {
  menu.classList.remove('active');
});



$(document).ready(function(){
    $('.otzivi__carusel__inner').slick( {
        
       /*  adaptiveHeight: true, */
        fade: true,
        cssEase: 'linear', 

        speed: 1300,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/right.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/left.png"></button>',

       // responsive: [
          //  {
           //   breakpoint: 768,
            //  settings: {
           //     dots: true,
            //    arrows: false
            //  },
           // }
        //]
    });
  });


          