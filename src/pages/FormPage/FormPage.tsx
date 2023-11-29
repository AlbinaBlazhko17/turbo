import {
	validationSchemaAddress,
	validationSchemaPersonalInfo,
	validationSchemaPreferences,
	validationSchemaSubmit,
} from '@/components/CustomForm/validationSchemas';
import Button from '@components/Button/Button';
import CustomForm from '@components/CustomForm/CustomForm';
import Steps from '@components/Steps/Steps';
import { Formik } from 'formik';
import { Suspense, useEffect, useRef, useState } from 'react';
import { FormValues } from '@/customTypes/formik.types';
import { ObjectSchema } from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToForm } from '@/store/actions/actions';
import { RootState } from '@/customTypes/store.types';
import { IDataForForm } from '@/interfaces/IDataForForms';
import { Await, useLoaderData } from 'react-router-dom';

import style from './formPage.module.scss';
import { motion } from 'framer-motion';

function FormPage() {
	const [currentStep, setCurrentStep] = useState(localStorage.getItem('step') || 1);
	const [validation, setValidation] = useState<ObjectSchema<FormValues>>(validationSchemaPersonalInfo);
	const initialValues = useSelector((state: RootState) => state.form.formData);
	const [data, setData] = useState<IDataForForm>(initialValues[initialValues.length - 1]!);
	const [click, setClick] = useState<'next' | 'prev' | undefined>(undefined);
	const formikRef = useRef(null);
	const formDispatcher = useDispatch();

	const loaderData = useLoaderData();

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
			setClick('prev');
		}
	};

	useEffect(() => {
		formDispatcher(addItemToForm(data));
	}, [data]);

	console.log(formikRef.current);
	function buttonAppearance() {
		if (formikRef.current !== null) {
			if (
				+currentStep === 1 &&
				!formikRef.current?.dirty &&
				Object.keys(formikRef.current?.errors).length === 0 &&
				Object.keys(formikRef.current?.touched).length === 0
			) {
				console.log('First if');
				return 'outlined';
			} else if (
				+currentStep === 1 &&
				// formikRef.current?.dirty &&
				Object.keys(formikRef.current?.errors).length === 0
			) {
				console.log('Second if');
				return 'filled';
			} else if (+currentStep > 0 && Object.keys(formikRef.current?.errors).length === 0) {
				console.log('Third if');
				return 'filled';
			} else if (
				+currentStep === 4 &&
				Object.keys(formikRef.current?.errors).length === 0 &&
				Object.keys(formikRef.current?.touched).length > 0
			) {
				console.log('Fourth if');
				return 'filled';
			}
		}
		return 'outlined';
	}

	return (
		<div className={style.wrapper}>
			<h1>Form page</h1>
			<Steps currentStep={+currentStep} setCurrentStep={setCurrentStep} />
			<Formik
				initialValues={initialValues[initialValues.length - 1]!}
				validationSchema={validation}
				onSubmit={() => {
					if (+currentStep < 5) {
						setCurrentStep(+currentStep + 1);
						setClick('next');
					}
				}}
				innerRef={formikRef}
			>
				{(formik) => (
					<section className={style.form__wrapper}>
						<motion.div
							key={+currentStep}
							initial="initialState"
							animate="animateState"
							transition={{
								type: 'tween',
								duration: 0.5,
							}}
							variants={{
								initialState: {
									opacity: 0,
									x: click === 'next' ? '100%' : '-100%',
								},
								animateState: {
									opacity: 1,
									x: '0',
								},
								exitState: {
									x: click === 'next' ? '-100%' : '100%',
								},
							}}
						>
							<Suspense fallback={<div>Loading...</div>}>
								<Await resolve={loaderData}>
									{(loaderData) => (
										<CustomForm
											formik={formik}
											currentStep={+currentStep}
											setData={setData}
											loaderDataCountries={loaderData.countries}
											loaderDataLanguages={loaderData.languages}
										/>
									)}
								</Await>
							</Suspense>
						</motion.div>
						{+currentStep !== 5 && (
							<div className={style.buttons}>
								<Button
									appearance={+currentStep === 1 ? 'outlined' : 'filled'}
									className={style[`buttons_right`]}
									onClick={handlePrevStep}
								>
									Previous step
								</Button>
								<Button
									appearance={buttonAppearance()}
									onClick={() => {
										formik.handleSubmit();
										formDispatcher(addItemToForm(formik.values));
									}}
									type={'submit'}
								>
									{+currentStep !== 4 ? 'Next step' : 'Finish'}
								</Button>
							</div>
						)}
					</section>
				)}
			</Formik>
		</div>
	);
}

export default FormPage;
