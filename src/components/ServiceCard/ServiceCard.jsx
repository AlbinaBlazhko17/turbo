function ServiceCard ({ service }) {
	return (
		<article className="services-item">
			<div className="services-item__img"><img src={service.img} alt={service.header} /></div>
			<div>
				<h3 className="services-item__header">{service.header}</h3>
				<p className="services-item__text">{service.text}</p>
			</div>
		</article>
	)
}

export default ServiceCard;