(function ($) {
"use strict";

// Sticky nav 
window.onscroll = function() {stickyNav()};

var header = document.getElementById("header-area");
var sticky = header.offsetTop;

function stickyNav() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  console.log(sticky);
}


$(function(){
  var nav = $('.main-menu ul'),
      animateTime = 400,
      navLink = $('.toggle-nav-btn');

  navLink.click(function(){
    if(nav.height() === 0){
      autoHeightAnimate(nav, animateTime);
    }  
    else {
      nav.stop().animate({ height: '0' }, animateTime);
    }
  });
  
})

/* Function to animate height: auto */
function autoHeightAnimate(element, time){
  	var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    	  element.height(curHeight); // Reset to Default Height
    	  element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
}

// hide main-menu after click a link for small device
$('.main-menu ul li a').click(function(){
  $(".main-menu ul").animate({ height: '0' },300);
})




// owlCarousel------------------------
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
      items:1,
      navText:['prev','next'],
        nav:false,
      dots:false,
        responsive:{
            0:{
                items:1,
                nav: true,
            },
            530:{
                items:2
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