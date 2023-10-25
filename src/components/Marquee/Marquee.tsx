import style from './marquee.module.scss';

function Marquee () {
	return (
		<section className={style.marquee}>
			<div className={style.marquee__wrapper}>
				<div className={style.marquee__content}>
					<h3 className={style['marquee-item']}>Turbo platform</h3>
					<h3 className={style['marquee-item']}>Best experts</h3>
					<h3 className={style['marquee-item']}>High-level services</h3>
					<h3 className={style['marquee-item']}>Modern tools</h3>
					<h3 className={style['marquee-item']}>Support & cooperation</h3>
					<h3 className={style['marquee-item']}>Professional Team</h3>
				</div>

				<div className={style['marquee__content']}>
					<h3 className={style['marquee-item']}>Turbo platform</h3>
					<h3 className={style['marquee-item']}>Best experts</h3>
					<h3 className={style['marquee-item']}>High-level services</h3>
					<h3 className={style['marquee-item']}>Modern tools</h3>
					<h3 className={style['marquee-item']}>Support & cooperation</h3>
					<h3 className={style['marquee-item']}>Professional Team</h3>
				</div>
			</div>
		</section>
	)
}

export default Marquee;