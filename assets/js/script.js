const navToggle = document.querySelector(".nav-toggler");
const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const closes = document.querySelector(".close-nav");
navToggle.onclick = function (){
    navToggle.classList.toggle("active");
    nav.classList.toggle("active");
};
closes.onclick = function (){
    navToggle.classList.remove("active");
    nav.classList.remove("active");
};
window.onscroll = function (){
    this.scrollY > 20 ?
    header.classList.add('active'):
    header.classList.remove('active');
};





$(document).ready(function(){


// init Isotope
var $grid = $('.ourPort_item').isotope({
    // options
  });
  // filter items on button click
  $('.ourPortfolio_menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });



 // counterUP
 $('.counter').counterUp({
  delay: 10,
  time: 1000
});



 // magnific-popup 
 $('.expandVideo').magnificPopup({
  type: 'iframe'
});




// portfolio area here
    // init Isotope
    var $grid = $('.portfolio_content').isotope({
      // options
      });
      // filter items on button click
      $('.portfolio_nav').on( 'click', 'li', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
      });








});
