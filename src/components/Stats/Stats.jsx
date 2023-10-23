import Diagram from '@assets/img/graph.png';

import './stats.scss'

function Stats () {
	return (
		<section className="stats">
			<h2>Statistics</h2>
			<figure className="stats__diagram">
				<img src={Diagram} alt="diagram"/>
			</figure>
		</section>
	)
}

export default Stats;