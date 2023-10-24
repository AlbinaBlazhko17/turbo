import PropTypes from 'prop-types';

import './aside.scss';

function Aside ({title, data, className}) {
	return (
		<aside className={`aside ${className || ''}`}>
			<h2>{title}</h2>
			<div className="aside__wrapper">
				{
					data.length && data.map(el => (
						<article key={el.id} className="aside-item">
							<div><img src={el.img} alt="aside_image"/></div>
							<div>
								<h3 className="aside-item__header">{el.header}</h3>
								<p className="aside-item__text">{el.text}</p>
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