(function ($) {
"use strict";

// Sticky nav 
window.onscroll = function() {myFunction()};

var header = document.getElementById("header-area");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  console.log(sticky);
}



// owlCarousel------------------------
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
      items:1,
      navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        nav:true,
      dots:false,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:3
            },
            992:{
                items:3
            }
        }
    })



})(jQuery);