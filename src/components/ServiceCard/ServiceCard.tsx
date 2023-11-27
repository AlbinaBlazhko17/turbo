import IDataForServices from '@interfaces/IDataForServices';
import style from '../Services/services.module.scss';

function ServiceCard({ service }: { service: IDataForServices }) {
	return (
		<article className={style['services-item']}>
			<div className={style['services-item__img']}>
				<img src={service.img} alt={service.header} />
			</div>
			<div>
				<h3 className={style['services-item__header']}>{service.header}</h3>
				<p className={style['services-item__text']}>{service.text}</p>
			</div>
		</article>
	);
}

export default ServiceCard;
