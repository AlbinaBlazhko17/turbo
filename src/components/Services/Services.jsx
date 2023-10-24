import ServiceCard from '../ServiceCard/ServiceCard';
import './services.scss';

function Services({ data }) {
	return (
		<section className="services">
			<h2 className="services__header">Services</h2>
			<div className="services__wrapper">
				{
					data.length !== 0 && data.map((service) => (
						<ServiceCard service={service} key={service.id} />
					))
				}
			</div>
		</section>
	)
}

export default Services;