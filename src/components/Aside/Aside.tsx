import PropTypes from 'prop-types';
import cn from 'classnames';
import { IDataForAside } from '@interfaces/IDataForAside';

import style from './aside.module.scss';

function Aside({ title, data, className }: { title: string; data: IDataForAside[]; className?: string }) {
	return (
		<aside className={cn(style.aside, className)}>
			<h2>{title}</h2>
			<div className={style.aside__wrapper}>
				{data.length !== 0 &&
					data.map((el, index) => (
						<a key={index} href={el.url} target="_blank" rel="noreferrer">
							<article className={style['aside-item']}>
								<div>
									<img src={el.urlToImage} alt="aside_image" />
								</div>
								<div>
									<h3 className={style['aside-item__header']}>{el.title}</h3>
									<p className={style['aside-item__text']}>{el.description}</p>
								</div>
							</article>
						</a>
					))}
			</div>
		</aside>
	);
}

Aside.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.string.isRequired,
			header: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		}),
	).isRequired,
	className: PropTypes.string,
};

export default Aside;
