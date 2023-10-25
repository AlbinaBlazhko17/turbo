import Diagram from '@assets/img/graph.png';

import style from './stats.module.scss'

function Stats () {
	return (
		<section className={style.stats}>
			<h2>Statistics</h2>
			<figure className={style.stats__diagram}>
				<img src={Diagram} alt="diagram"/>
			</figure>
		</section>
	)
}

export default Stats;