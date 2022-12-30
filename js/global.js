// Scroll to

$('.scroll_to').click(function(e) {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);

    e.preventDefault();
});


// Slick JS

$('#what_we_offer_slider').slick({
	slidesToShow: 3,
    speed: 1000,
    arrows: false,
     responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

$('#VH_variations_slider').slick({
	slidesToShow: 3,
	speed: 1000,
	arrows: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
	]
});


$('#robots_slider').slick({
    speed: 1000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    // adaptiveHeight: true
});

$('#robots_slider .pager .bullet').click(function(e) {
	e.preventDefault();
    $('#robots_slider').slick('slickGoTo', $(this).data('slide') - 1);
});


$('#attachment_slider').slick({
	speed: 1000,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 5000,
	// adaptiveHeight: true
});

$('#attachment_slider .pager .bullet').click(function(e) {
	e.preventDefault();
	$('#robots_slider').slick('slickGoTo', $(this).data('slide') - 1);
});


// Mobile nav

$('.burger_cta').on('click', function(e) {
	e.preventDefault();

	$(this).toggleClass('mobile_nav_open');

	$('#mobile_nav').toggleClass('open');
	
	if ($('#mobile_nav').hasClass('open')) {
		$('body').css('overflow', 'hidden');
	} else {
		$('body').css('overflow', 'visible');
	}
});