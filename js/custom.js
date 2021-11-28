$(function () {

	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: true,
		live: true,
		callback: function (box) {},
		scrollContainer: null,
		resetAnimation: true,
	});
	wow.init();


	//   LISTING VENIBOX JS HERE
	$(document).ready(function () {
		$('.venobox').venobox({
			share: false
		});
	});

	// DIRECTION COUNTER JS HERE
	$('.counter').counterUp({
		delay: 8,
		time: 1200
	});

	$('.counterdd').counterUp({
		delay: 6,
		time: 1300
	});

	$('.counterrr').counterUp({
		delay: 4,
		time: 1400
	});


	// TESTIMONIAL SLIDER JS HERE

	$(document).ready(function () {

		$('.lightSlider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows:false,
			autoplay: true,
			responsive: [{
					breakpoint: 769,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '10px',
						slidesToShow: 2
					}
				},
				{
					breakpoint: 577,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '10px',
						slidesToShow: 1
					}
				}
			]
		});
	});


});