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
		(function () {
			switch (+currentStep) {
				case 1:
					validationSchema = validationSchemaPersonalInfo;
					initialValues = initialValuesPersonalInfo;
				case 2:
					validationSchema = validationSchemaAddress;
					initialValues = initialValuesAddress;
				case 3:
					validationSchema = validationSchemaPreferences;
					initialValues = initialValuesPreferences;
				case 4:
					validationSchema = validationSchemaSubmit;
					initialValues = initialValuesSubmit;
				default:
					validationSchema = validationSchemaPersonalInfo;
					initialValues = initialValuesPersonalInfo;
			}
		})();
	}, [currentStep]);

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			console.log('Form submitted with values:', values);
			if (+currentStep < 4) {
				setCurrentStep(+currentStep + 1);
			}
		},
	});

	const handlePrevStep = () => {
		if (+currentStep > 1) {
			setCurrentStep(+currentStep - 1);
		}
	}


	return(
		<div className={style.wrapper}>
			<h1>Form page</h1>
			<Steps currentStep={+currentStep} setCurrentStep={setCurrentStep}/>
			<section className={style.form__wrapper}>
				<CustomForm currentStep={+currentStep} formik={formik} />
				<div className={style.buttons}>
					<Button appearance={+currentStep === 1? 'outlined': 'filled'} className={style[`buttons_right`]} onClick={handlePrevStep}>Previous step</Button>
					<Button appearance={+currentStep !== 4? 'filled': 'outlined' } onClick={formik.handleSubmit}>{currentStep !== 4? 'Next step': 'Finish'}</Button>
				</div>
			</section>
		</div>
	)
}

export default FormPage;