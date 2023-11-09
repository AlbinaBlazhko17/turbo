import { initialValuesAddress, initialValuesPersonalInfo, initialValuesPreferences, initialValuesSubmit } from '@/components/CustomForm/initialValues';
import { validationSchemaAddress, validationSchemaPersonalInfo, validationSchemaPreferences, validationSchemaSubmit } from '@/components/CustomForm/validationSchemas';
import Button from '@components/Button/Button';
import CustomForm from '@components/CustomForm/CustomForm';
import Steps from '@components/Steps/Steps';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { FormValues } from '@/components/CustomForm/formik';
import { ObjectSchema } from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToForm } from '@/store/actions';

import style from './formPage.module.scss';

function FormPage() {
	const [currentStep, setCurrentStep] = useState(localStorage.getItem('step') || 1);
	const [data, setData] = useState<FormValues>();
	const [validation, setValidation] = useState<ObjectSchema<FormValues>>(validationSchemaPersonalInfo);
	let initialValues = useSelector((state) => state.form);
	const formDispatcher = useDispatch();

	useEffect(() => {
		localStorage.setItem('step', currentStep.toString());
		(function () {
			switch (+currentStep) {
				case 1:
					setValidation(validationSchemaPersonalInfo);
					break;
				case 2:
					setValidation(validationSchemaAddress);
					break;
				case 3:
					setValidation(validationSchemaPreferences);
					break;
				case 4:
					setValidation(validationSchemaSubmit);
					break;
				default:
					setValidation(validationSchemaPersonalInfo);
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
				initialValues={initialValues!}
				validationSchema={validation}
				onSubmit={(values) => {
					console.log(values);
					if (+currentStep < 5) {
						setCurrentStep(+currentStep + 1);
					}
				}}
			>
				{(formik) => (
					<section className={style.form__wrapper}>
						<CustomForm formik={formik} currentStep={+currentStep} />
						{+currentStep !== 5 &&
							<div className={style.buttons}>
								<Button
									appearance={+currentStep === 1 ? 'outlined' : 'filled'}
									className={style[`buttons_right`]}
									onClick={handlePrevStep}
								>
									Previous step
								</Button>
								<Button
									appearance={+currentStep !== 5 ? 'filled' : 'outlined'}
									onClick={() => { formik.handleSubmit(); formDispatcher(addItemToForm(formik.values)) }}
									type={'submit'}
								>
									{currentStep !== 4 ? 'Next step' : 'Finish'}
								</Button>
							</div>
						}
					</section>
				)}
			</Formik>
		</div >
	)
}

export default FormPage;