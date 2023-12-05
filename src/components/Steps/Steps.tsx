import { ThemeContext } from '@/theme/theme';
import dataForSteps from '@utils/dataForSteps';
import cn from 'classnames';
import { useContext } from 'react';
import { TiTick } from 'react-icons/ti';

import style from './steps.module.scss';

function Steps({ currentStep }: { currentStep: number }) {
	const { theme } = useContext(ThemeContext);

	return (
		<section className={cn(style.steps, style[`${theme}`])}>
			{dataForSteps.map((step, i) => (
				<div
					key={i}
					className={`${style['steps-item']} ${currentStep === i + 1 && style.active} ${
						i + 1 < currentStep && style.complete
					}`}
				>
					<h2 className={style['steps-item__step']}>{i + 1 < currentStep ? <TiTick size={24} /> : i + 1}</h2>
					<h3 className={style['steps-item__type']}>{step}</h3>
				</div>
			))}
		</section>
	);
}

export default Steps;
