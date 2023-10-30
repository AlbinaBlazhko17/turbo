import dataForMarquee from '@utils/dataForMarquee';

import style from './marquee.module.scss';

function Marquee () {
	const duplicatedItems: Array<string> = dataForMarquee.concat(dataForMarquee);

	return (
		<section className={style.marquee}>
			<div className={style.marquee__mask}>
				<ul className={style.marquee__wrapper}>
					{duplicatedItems.map((item, index) => (
						<li key={index} className={style['marquee-item']}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Marquee;