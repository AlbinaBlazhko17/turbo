import PropTypes from 'prop-types';
import cn from 'classnames';

import style from './aside.module.scss';

function Aside ({title, data, className}) {
	console.log(className)
	return (
		<aside className={cn(style.aside, className)}>
			<h2>{title}</h2>
			<div className={style.aside__wrapper}>
				{
					data.length && data.map(el => (
						<article key={el.id} className={style['aside-item']}>
							<div><img src={el.img} alt="aside_image"/></div>
							<div>
								<h3 className={style['aside-item__header']}>{el.header}</h3>
								<p className={style['aside-item__text']}>{el.text}</p>
							</div>
						</article>
					))
				}
			</div>
		</aside>
	)
}

Aside.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.string.isRequired,
			header: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		})
	).isRequired,
	className: PropTypes.string,
  };

export default Aside;