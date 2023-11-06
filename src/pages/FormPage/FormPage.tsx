import { useEffect, useState, useRef } from 'react';
import { Formik, useFormik } from 'formik';
import { initialValuesPersonalInfo, initialValuesAddress, initialValuesPreferences, initialValuesSubmit } from '@/components/CustomForm/initialValues';
import { validationSchemaPersonalInfo, validationSchemaAddress, validationSchemaPreferences, validationSchemaSubmit } from '@/components/CustomForm/validationSchemas';
import CustomForm from '@components/CustomForm/CustomForm';
import Steps from '@components/Steps/Steps';
import Button from '@components/Button/Button';

import style from './formPage.module.scss';

function FormPage() {
	const [currentStep, setCurrentStep] = useState(localStorage.getItem('step') || 1);
	const [validation, setValidation] = useState(validationSchemaPersonalInfo);
	const [initialValues, setInitialValues] = useState(initialValuesPersonalInfo);

	useEffect(() => {
		localStorage.setItem('step', currentStep.toString());
		(function () {
			switch (+currentStep) {
				case 1:
					setValidation(validationSchemaPersonalInfo);
					setInitialValues(initialValuesPersonalInfo);
					break;
				case 2:
					setValidation(validationSchemaAddress);
					setInitialValues(initialValuesAddress);
					break;
				case 3:
					setValidation(validationSchemaPreferences);
					setInitialValues(initialValuesPreferences);
					break;
				case 4:
					setValidation(validationSchemaSubmit);
					setInitialValues(initialValuesSubmit);
					break;
				default:
					setValidation(validationSchemaPersonalInfo);
					setInitialValues(initialValuesPersonalInfo);
			}
		})();
	}, [currentStep]);

	const handlePrevStep = () => {
		if (+currentStep > 1) {
			setCurrentStep(+currentStep - 1);
		}
	}


	return (
		<div className={style.wrapper}>
			<h1>Form page</h1>
			<Steps currentStep={+currentStep} setCurrentStep={setCurrentStep} />
			<Formik
				initialValues={initialValues}
				validationSchema={validation}
				onSubmit={(values) => {
					console.log('Validation Schema:', validation);
					console.log('Form submitted with values:', values);
					if (+currentStep < 4) {
						setCurrentStep(+currentStep + 1);
					}
				}}
			>
				{(formik) => (
					<section className={style.form__wrapper}>
						<CustomForm formik={formik} currentStep={+currentStep} />
						<div className={style.buttons}>
							<Button
								appearance={+currentStep === 1 ? 'outlined' : 'filled'}
								className={style[`buttons_right`]}
								onClick={handlePrevStep}
							>
								Previous step
							</Button>
							<Button
								appearance={+currentStep !== 4 ? 'filled' : 'outlined'}
								onClick={formik.handleSubmit}
								type="submit"
							>
								{currentStep !== 4 ? 'Next step' : 'Finish'}
							</Button>
						</div>
					</section>
				)}
			</Formik>
		</div>
	)
}

export default FormPage;