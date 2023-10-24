function SliderCard ({ slide }) {
	return (
		<>
			<div className="slider__carousel-slide__img"><img src={slide.img} alt={slide.name}/></div>
			<h4 className="slider__carousel-slide__name">{slide.name}</h4>
			<h5 className="slider__carousel-slide__role">{slide.role}</h5>
			<div className="slider__carousel-slide__stars"><img src={slide.stars} alt="stars"/></div>
			<p className="slider__carousel-slide__text">{slide.text}</p>
		</>
	)
}

export default SliderCard;