//MenuBtn
const menuBtn = document.querySelector('header .navbar-toggler');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

// Owlcarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    center: true,
    navText: [
	    "<i class='fa-solid fa-arrow-left'></i>",
	    "<i class='fa-solid fa-arrow-right'></i>"
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});

//carousel
$('.carousel[data-type="multi"] .item').each(function() {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	for (var i = 0; i < 2; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}

		next.children(':first-child').clone().appendTo($(this));
	}
});

//Animation
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.fixed-bottom', { 
    autoAlpha: 1
}, {
    autoAlpha: 0, 
    duration: .5, ease: "sine.inOut",
    scrollTrigger:{
        trigger: 'footer#final',
        start: 'center center'
    }
});
