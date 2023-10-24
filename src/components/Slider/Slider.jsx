import { useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import { Pagination } from 'swiper/modules';
import Stars from '@assets/img/stars.png';
import FirstFeedbackImg from '@assets/icons/first_feedbaack.svg';
import SecondFeedbackImg from '@assets/icons/second__feedback.svg';
import ThirdFeedbackImg from '@assets/icons/third__feedback.svg';


import 'swiper/css';
import 'swiper/css/pagination';
import './slider.scss';

SwiperCore.use([Pagination]);

function Slider () {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	const handleSlideChange = (swiper) => {
		setActiveSlideIndex(swiper.activeIndex);
	};
	
	const handleSlideTransitionEnd = (swiper) => {
		swiper.slides.forEach((slide, index) => {
			if (index === swiper.activeIndex) {
				slide.classList.add('slider__carousel-slide_active');
			}
		});
	};

	return (
		<section className="slider">
			<h2>Client’s kind Words</h2>
			<h3 className="slider__subheader">Business owners and managers lead by example. The values</h3>
			<div className="slider__carousel">
				<Swiper
					centeredSlides={true}
					spaceBetween={0}
					slidesPerView={'auto'}
					pagination={{
						clickable: true,
					}}
					className='slider__carousel__wrapper'
					modules={[Pagination]}
					onSwiper={handleSlideChange}
					onSlideChange={handleSlideChange}
					onSlideChangeTransitionEnd={handleSlideTransitionEnd}
					effect="slide"
					speed={500}
					>
					<SwiperSlide className='slider__carousel-slide'>
							<div className="slider__carousel-slide__img"><img src={FirstFeedbackImg} alt="first_feedback"/></div>
							<h4 className="slider__carousel-slide__name">Brooklyn Simmons</h4>
							<h5 className="slider__carousel-slide__role">Co-Founder & Chief Executive Officer</h5>
							<div className="slider__carousel-slide__stars"><img src={Stars} alt="stars"/></div>
							<p className="slider__carousel-slide__text">Amet minim mollit non deserunt ullamco est
								sit aliqua dolor do amet sint. Velit officia
								consequat duis enim velit mollit. Amet
								minim mollit non deserunt ullamco est sit
								aliqua dolor do amet sint. Velit officia
								consequat duis enim velit mollit.</p>
					</SwiperSlide>

					<SwiperSlide className='slider__carousel-slide'>
							<div className="slider__carousel-slide__img"><img src={SecondFeedbackImg} alt="first_feedback"/></div>
							<h4 className="slider__carousel-slide__name">Brooklyn Simmons</h4>
							<h5 className="slider__carousel-slide__role">Co-Founder & Chief Executive Officer</h5>
							<div className="slider__carousel-slide__stars"><img src={Stars} alt="stars"/></div>
							<p className="slider__carousel-slide__text">Amet minim mollit non deserunt ullamco est
								sit aliqua dolor do amet sint. Velit officia
								consequat duis enim velit mollit. Amet
								minim mollit non deserunt ullamco est sit
								aliqua dolor do amet sint. Velit officia
								consequat duis enim velit mollit.</p>
					</SwiperSlide>

					<SwiperSlide className='slider__carousel-slide'>
							<div className="slider__carousel-slide__img"><img src={ThirdFeedbackImg} alt="first_feedback"/></div>
							<h4 className="slider__carousel-slide__name">Brooklyn Simmons</h4>
							<h5 className="slider__carousel-slide__role">Co-Founder & Chief Executive Officer</h5>
							<div className="slider__carousel-slide__stars"><img src={Stars} alt="stars"/></div>
							<p className="slider__carousel-slide__text">Amet minim mollit non deserunt ullamco est
								sit aliqua dolor do amet sint. Velit officia
								consequat duis enim velit mollit. Amet
								minim mollit non deserunt ullamco est sit
								aliqua dolor do amet sint. Velit officia
								consequat duis enim velit mollit.</p>
					</SwiperSlide>

						<SwiperSlide className='slider__carousel-slide'>
							<div className="slider__carousel-slide__img"><img src={FirstFeedbackImg} alt="first_feedback"/></div>
							<h4 className="slider__carousel-slide__name">Brooklyn Simmons</h4>
							<h5 className="slider__carousel-slide__role">Co-Founder & Chief Executive Officer</h5>
							<div className="slider__carousel-slide__stars"><img src={Stars} alt="stars"/></div>
							<p className="slider__carousel-slide__text">Amet minim mollit non deserunt ullamco est
								sit aliqua dolor do amet sint. Velit officia
								consequat duis enim velit mollit. Amet
								minim mollit non deserunt ullamco est sit
								aliqua dolor do amet sint. Velit officia
								consequat duis enim velit mollit.</p>
					</SwiperSlide>

					<SwiperSlide className='slider__carousel-slide'>

							<div className="slider__carousel-slide__img"><img src={FirstFeedbackImg} alt="first_feedback"/></div>
							<h4 className="slider__carousel-slide__name">Brooklyn Simmons</h4>
							<h5 className="slider__carousel-slide__role">Co-Founder & Chief Executive Officer</h5>
							<div className="slider__carousel-slide__stars"><img src={Stars} alt="stars"/></div>
							<p className="slider__carousel-slide__text">Amet minim mollit non deserunt ullamco est
								sit aliqua dolor do amet sint. Velit officia
								consequat duis enim velit mollit. Amet
								minim mollit non deserunt ullamco est sit
								aliqua dolor do amet sint. Velit officia
								consequat duis enim velit mollit.</p>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}

export default Slider;