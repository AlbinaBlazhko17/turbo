var feedbackSwiper = new Swiper('.slider__carousel', {
	direction: 'horizontal',
	slidesPerView: 'auto',
	centeredSlides: true,

	wrapperClass: 'slider__carousel__wrapper',
	slideClass: 'slider__carousel-slide',

	pagination: {
		el: '.slider__carousel-pagination',
		clickable: true,
	},

	on: {
		init: function () {
			const notActiveSlide = document.querySelectorAll(
				'.slider__carousel-slide:not(.swiper-slide-active)',
			);
			notActiveSlide.forEach((slide) => {
				slide.style.transform = 'scale(0.8)';
			});
			const activeSlide = document.querySelector(
				'.slider__carousel-slide.swiper-slide-active',
			);
			activeSlide.style.boxShadow =
				'0px 18px 32px 0px rgba(67, 67, 67, 0.14)';
			activeSlide.style.transform = 'scale(1)';
		},
		slideChange: function () {
			const slides = document.querySelectorAll('.slider__carousel-slide');
			slides.forEach((slide) => {
				slide.style.boxShadow = 'none';
				slide.style.transform = 'scale(0.8)';
			});
			const activeSlide = slides[this.activeIndex];
			activeSlide.style.boxShadow =
				'0px 18px 32px 0px rgba(67, 67, 67, 0.14)';
			activeSlide.style.transform = 'scale(1)';
		},
	},
});

const navState = document.querySelector('.nav');
const navArrow = document.querySelector('.nav__arrow');

navArrow.addEventListener('click', () => {
	if (navState.classList.contains('nav_closed')) {
		navState.classList.remove('nav_closed');
		navState.classList.add('nav_open');
	} else {
		navState.classList.remove('nav_open');
		navState.classList.add('nav_closed');
	}
});
