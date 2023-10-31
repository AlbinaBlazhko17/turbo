import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { initialValuesPersonalInfo, initialValuesAddress, initialValuesPreferences, initialValuesSubmit } from '@/components/CustomForm/initialValues';
import { validationSchemaPersonalInfo, validationSchemaAddress, validationSchemaPreferences, validationSchemaSubmit } from '@/components/CustomForm/validationSchemas';
import CustomForm from '@components/CustomForm/CustomForm';
import Steps from '@components/Steps/Steps';
import Button from '@components/Button/Button';

import style from './formPage.module.scss';

function FormPage () {
	const [currentStep, setCurrentStep] = useState(localStorage.getItem('step') || 1);
	let initialValues = initialValuesPersonalInfo;
	let validationSchema = validationSchemaPersonalInfo;

	useEffect(() => {
		localStorage.setItem('step', currentStep.toString());
		initialValues = (function () {
			switch (+currentStep) {
				case 1:
					return initialValuesPersonalInfo;
				case 2:
					return initialValuesAddress;
				case 3:
					return initialValuesPreferences;
				case 4:
					return initialValuesSubmit;
				default:
					return initialValuesPersonalInfo;
			}
		})();

		validationSchema = (function () {
			switch (+currentStep) {
				case 1:
					return validationSchemaPersonalInfo;
				case 2:
					return validationSchemaAddress;
				case 3:
					return validationSchemaPreferences;
				case 4:
					return validationSchemaSubmit;
				default:
					return validationSchemaPersonalInfo;
			}
		})();
	}, [currentStep]);

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			console.log('Form submitted with values:', values);
		},
	});

	const handlePrevStep = () => {
		if (+currentStep > 1) {
			setCurrentStep(+currentStep - 1);
		}
	}

	const handleNextStep = () => {
		if (+currentStep < 4) {
			formik.handleSubmit();
			if (formik.isValid) {
				setCurrentStep(+currentStep + 1);
			} else {
				return;
			}
		}
	}


	return(
		<main>
			<div>
				<h1>Form page</h1>
				<Steps currentStep={+currentStep} setCurrentStep={setCurrentStep}/>
				<section>
					<CustomForm currentStep={+currentStep} formik={formik} />
					<div className={style.buttons}>
						<Button appearance={+currentStep === 1? 'outlined': 'filled'} className={style[`buttons_right`]} onClick={handlePrevStep}>Previous step</Button>
						<Button appearance={+currentStep !== 4? 'filled': 'outlined' } onClick={handleNextStep}>{currentStep !== 4? 'Next step': 'Finish'}</Button>
					</div>
				</section>
			</div>
		</main>
	)
}

export default FormPage;