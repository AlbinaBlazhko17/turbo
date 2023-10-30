import dataForSteps from '@utils/dataForSteps';

import style from './steps.module.scss';

function Steps() {
	return (
		<div>
			{
				dataForSteps.map((step, i) => (
					<>
						<h2 key={i}>{ i + 1 }</h2>
						<h3>{step}</h3>
					</>
				))
			}
		</div>
	)
}

export default Steps;