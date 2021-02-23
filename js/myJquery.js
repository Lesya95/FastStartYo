$(document).ready(function(){
	$('.menu__burger').click(function(event){
		$('.menu__burger,.menu__navbar').toggleClass('active2');
	});
});



/* carousel */
$(document).ready(function () {
	$("#screenshots").owlCarousel({
		items: 4,
		itemsCustom: [
			[0, 1],
			[480, 2],
			[768, 3],
			[992, 4]
		],
	});
	$("#owl-testi").owlCarousel
		({
			navigation: false, // Show next and prev buttons
			slideSpeed: 300,
			autoHeight: true,
			singleItem: true
		});
});
 
$(document).ready(function () {
	$('.nav__item-link').on('click', function (e) {
		e.preventDefault();
		showSection($(this).attr('href'), true);
	})
	showSection(window.location.hash, false);	
});

function showSection(section, isAnimate) {
	let direction = section.replace(/#/, ''),
		reqSection = $('section').filter('[data-section="' + direction + '"]'),
		reqsectionPos = reqSection.offset().top;

	if (isAnimate) {
		$('body, html').animate({ scrollTop: reqsectionPos }, 500);
	} else {
		$('body, html').scrollTop(reqsectionPos);
	}
};


$(window).scroll(function(){
	$('.section').each(function(){
		var $this = $(this),
				topEdge = $this.offset().top - 350,
				bottomEdge = topEdge + $this.height(),
				wScroll = $(window).scrollTop();

		if(topEdge < wScroll && bottomEdge > wScroll){
			var currentId = $this.data('section'),
				reqLink = $('.nav__item-link').filter('[href="#' + currentId + '"]');

			reqLink.closest('.nav__item').addClass('active').siblings()
			.removeClass('active');
			
			window.location.hash = currentId;
		}
	});
});






