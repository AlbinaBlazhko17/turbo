import { useEffect, useState } from 'react';
import CustomForm from '@components/CustomForm/CustomForm';
import Steps from '@components/Steps/Steps';
import Button from '@components/Button/Button';

import style from './formPage.module.scss';

function FormPage () {
	const [currentStep, setCurrentStep] = useState(localStorage.getItem('step') || 1);

	useEffect(() => {
		localStorage.setItem('step', currentStep.toString());
	}, [currentStep]);

	const handlePrevStep = () => {
		if (+currentStep > 1) {
			setCurrentStep(+currentStep - 1);
		}
	}

	const handleNextStep = () => {
		if (+currentStep < 4) {
			setCurrentStep(+currentStep + 1);
		}
	}

	return(
		<main>
			<div>
				<h1>Form page</h1>
				<Steps currentStep={+currentStep} setCurrentStep={setCurrentStep}/>
				<CustomForm />
				<Button appearance={currentStep === 1? 'outlined': 'filled'} onClick={handlePrevStep}>Previous step</Button>
				<Button appearance={currentStep !== 4? 'filled': 'outlined' } onClick={handleNextStep}>{currentStep !== 4? 'Next step': 'Finish'}</Button>
			</div>
		</main>
	)
}

export default FormPage;