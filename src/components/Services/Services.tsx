import ServiceCard from '../ServiceCard/ServiceCard';
import IDataForServices from '@interfaces/IDataForServices';

import style from './services.module.scss';

function Services({ data }: { data: IDataForServices[] }) {
	return (
		<section className={style.services}>
			<h2 className={style.services__header}>Services</h2>
			<div className={style.services__wrapper}>
				{data.length !== 0 && data.map((service) => <ServiceCard service={service} key={service.id} />)}
			</div>
		</section>
	);
}

export default Services;
