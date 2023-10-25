import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import { Pagination } from 'swiper/modules';
import dataForSlider from '@utils/dataForSlider';
import SliderCard from '../SliderCard/SliderCard';


import 'swiper/css';
import 'swiper/css/pagination';
import style from './slider.module.scss';

SwiperCore.use([Pagination]);

function Slider () {
	
	const handleSlideTransitionEnd = (swiper) => {
		swiper.slides.forEach((slide, index) => {
			if (index === swiper.activeIndex) {
				slide.classList.add(`${style['swiper-slide-active']}`);
			}
		});
	};

	return (
		<section className={style.slider}>
			<h2>Client’s kind Words</h2>
			<h3 className={style.slider__subheader}>Business owners and managers lead by example. The values</h3>
			<div className={style.slider__carousel}>
				<Swiper
					centeredSlides={true}
					spaceBetween={0}
					slidesPerView={'auto'}
					slideClass={style['slider__carousel-slide']}
					pagination={{
						el: style['swiper-pagination'],
						clickable: true,
						bulletClass: style['swiper-pagination-bullet'],
						bulletActiveClass: style['swiper-pagination-bullet-active'],
					}}
					slideActiveClass={style['swiper-slide-active']}
					className={style.slider__carousel__wrapper}
					modules={[Pagination]}
					onSlideChangeTransitionEnd={handleSlideTransitionEnd}
					effect="slide"
					speed={300}
				>
					{
						dataForSlider.length !== 0 && dataForSlider.map(slide => (
							<SwiperSlide className={style['slider__carousel-slide']} key={slide.id}>
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