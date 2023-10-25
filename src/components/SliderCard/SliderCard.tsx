import IDataForSlider from '@/interfaces/IDataForSlider';
import style from '../Slider/slider.module.scss';

function SliderCard ({ slide }: { slide: IDataForSlider}) {
	return (
		<>
			<div className={style['slider__carousel-slide__img']}><img src={slide.img} alt={slide.name}/></div>
			<h4 className={style['slider__carousel-slide__name']}>{slide.name}</h4>
			<h5 className={style['slider__carousel-slide__role']}>{slide.role}</h5>
			<div className={style['slider__carousel-slide__stars']}><img src={slide.stars} alt="stars"/></div>
			<p className={style['slider__carousel-slide__text']}>{slide.text}</p>
		</>
	)
}

export default SliderCard;