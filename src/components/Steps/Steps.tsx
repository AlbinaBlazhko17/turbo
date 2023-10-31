import { Dispatch, SetStateAction, useContext, useState } from 'react';
import dataForSteps from '@utils/dataForSteps';
import { ThemeContext } from '@/theme/theme';
import cn from 'classnames';
import { TiTick } from 'react-icons/ti';

import style from './steps.module.scss';

function Steps({currentStep, setCurrentStep}: {currentStep: number, setCurrentStep: Dispatch<SetStateAction<string | number>>}) {
	const { theme } = useContext(ThemeContext);
	const [complete, setComplete] = useState(false);

	return (
		<section className={cn(style.steps, style[`${theme}`])}>
			{
				dataForSteps.map((step, i) => (
					<div key={i} className={`${style['steps-item']} ${currentStep === i + 1 && style.active} ${ (i + 1 < currentStep || complete ) && style.complete}`}>
						<h2 className={style['steps-item__step']}>{ (i + 1 < currentStep || complete)? <TiTick size={24}/>: i + 1}</h2>
						<h3>{step}</h3>
					</div>
				))
			}
		</section>
	)
}

export default Steps;