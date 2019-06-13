$(function () {

	/*fixed header*/
	let header = $("#header");
	let intro = $("#intro");
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");


	$(window).on("scroll load resize", function () {
		let introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		if (scrollPos > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	})

	/*scroll*/
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		let elemntID = $(this).data('scroll');
		let elementOffset = $(elemntID).offset().top;

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset - 47
		}, 600);
	});

	/*burger*/
	$("#navToggle").on("click", function (e) {
		e.preventDefault();

		nav.toggleClass("show");
	})

	/*videoSlider*/

	let slider = $("#videoSlider");

	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
		arrows: false,
		dots: true
	});


	/*preloader*/

	$(window).on('load', function () {
		let $preloader = $('#p_prldr'),
			$svg_anm = $preloader.find('.svg_anm');
		$svg_anm.fadeOut();
		$preloader.delay(500).fadeOut('slow');
	});
});
