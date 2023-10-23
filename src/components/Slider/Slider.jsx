import Stars from '@assets/img/stars.png';
import FirstFeedbackImg from '@assets/icons/first_feedbaack.svg';
import SecondFeedbackImg from '@assets/icons/second__feedback.svg';
import ThirdFeedbackImg from '@assets/icons/third__feedback.svg';

import './slider.scss';

function Slider () {
	return (
		<section className="slider">
			<h2>Client’s kind Words</h2>
			<h3 className="slider__subheader">Business owners and managers lead by example. The values</h3>
			<div className="slider__carousel">
				<div className="slider__carousel__wrapper">
					<div className="slider__carousel-slide swiper-slide">
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
					</div>

					<div className="slider__carousel-slide swiper-slide">
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
					</div>

					<div className="slider__carousel-slide  swiper-slide">
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
					</div>

					<div className="slider__carousel-slide  swiper-slide">
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
					</div>

					<div className="slider__carousel-slide  swiper-slide">
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
					</div>
				</div>
			</div>
			<div className="slider__carousel-pagination"></div>
		</section>
	)
}

export default Slider;