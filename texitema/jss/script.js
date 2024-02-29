function myFunction() {
    alert("Hello! I am an alert box!");
  }

  // banner start 
  AOS.init({
    offset: 100,
	delay: 10,
	duration: 2000,
	easing: 'linear'
});

// about us counter 
jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 10,
      time: 4000
  });
});

// container_start
// container_end