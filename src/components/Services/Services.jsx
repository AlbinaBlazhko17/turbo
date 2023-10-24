

import './services.scss';

function Services({ data }) {
	return (
		<section className="services">
			<h2 className="services__header">Services</h2>
			<div className="services__wrapper">
				{
					data.length !== 0 && data.map((service) => (
						<article key={data.id} className="services-item">
							<div className="services-item__img"><img src={service.img} alt={service.header} /></div>
							<div>
								<h3 className="services-item__header">{service.header}</h3>
								<p className="services-item__text">{service.text}</p>
							</div>
						</article>
					))
				}
			</div>
		</section>
	)
}

export default Services;