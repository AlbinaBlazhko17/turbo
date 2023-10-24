import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import { Pagination } from 'swiper/modules';
import dataForSlider from '@utils/dataForSlider';
import SliderCard from '../SliderCard/SliderCard';


import 'swiper/css';
import 'swiper/css/pagination';
import './slider.scss';

SwiperCore.use([Pagination]);

function Slider () {
	
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
					onSlideChangeTransitionEnd={handleSlideTransitionEnd}
					effect="slide"
					speed={500}
				>
					{
						dataForSlider.length !== 0 && dataForSlider.map(slide => (
							<SwiperSlide className='slider__carousel-slide' key={slide.id}>
								<SliderCard slide={slide} />
							</SwiperSlide>
						))
					}
				</Swiper>
			</div>
		</section>
	)
}

export default Slider;