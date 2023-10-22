const swiper = new Swiper('.swiper', {
	spaceBetween: 30,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
		dynamicMainBullets: 1,
	},
	mousewheel: {
		enabled: false,
	},
	touch: {
		enabled: false,
	},

	autoplay: { delay: '5000' },

	loop: true,
	lazyPreloadPrevNext: 4,
	slidesPerView: 1,
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		1440: {
			slidesPerView: 4,
			spaceBetween: 50,
		},
	},

	mousewheel: true,
	keyboard: true,
});
