import {
	validationSchemaAddress,
	validationSchemaPersonalInfo,
	validationSchemaPreferences,
	validationSchemaSubmit,
} from '@/components/CustomForm/validationSchemas';
import { FormValues, IFormikInnerRef } from '@/customTypes/formik.types';
import { RootState } from '@/customTypes/store.types';
import { IDataForForm } from '@/interfaces/IDataForForms';
import { addItemToForm } from '@/store/actions/actions';
import { Button, CustomForm, Steps } from '@/components';
import { IFormikRef } from '@interfaces/IDataForFormik';
import { Formik } from 'formik';
import { motion } from 'framer-motion';
import { Suspense, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Await, useLoaderData } from 'react-router-dom';
import { ObjectSchema } from 'yup';

import style from './formPage.module.scss';

function FormPage() {
	const storedStep = localStorage.getItem('step');
	const step = storedStep !== null ? +storedStep : undefined;
	const [currentStep, setCurrentStep] = useState(step || 1);
	const [validation, setValidation] = useState<ObjectSchema<FormValues>>(validationSchemaPersonalInfo);
	const initialValues = useSelector((state: RootState) => state.form.formData);
	const [data, setData] = useState<IDataForForm>(initialValues[initialValues.length - 1]!);
	const [click, setClick] = useState<'next' | 'prev' | undefined>(undefined);
	const formikRef = useRef<IFormikRef>();
	const formDispatcher = useDispatch();

	const loaderData = useLoaderData();

	useEffect(() => {
		localStorage.setItem('step', currentStep.toString());
		(function () {
			switch (currentStep) {
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
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
			setClick('prev');
		}
	};

	useEffect(() => {
		formDispatcher(addItemToForm(data));
	}, [data]);

	function handleClickSubmit() {
		if (formikRef.current !== null && formikRef.current !== undefined) {
			formikRef.current.handleSubmit();
			formDispatcher(addItemToForm(formikRef.current.values));
		}
	}

	function buttonAppearance() {
		if (formikRef.current !== null && formikRef.current !== undefined) {
			if (
				currentStep === 1 &&
				!formikRef.current.dirty &&
				Object.keys(formikRef.current.errors).length === 0 &&
				Object.keys(formikRef.current.touched).length === 0
			) {
				return 'outlined';
			} else if (
				currentStep === 1 &&
				formikRef.current.values.firstName !== '' &&
				formikRef.current.values.lastName !== '' &&
				formikRef.current.values.email !== '' &&
				formikRef.current.values.gender !== ''
			) {
				return 'filled';
			} else if (currentStep > 0 && currentStep !== 4 && Object.keys(formikRef.current.errors).length === 0) {
				return 'filled';
			} else if (
				currentStep === 4 &&
				Object.keys(formikRef.current.errors).length === 0 &&
				formikRef.current.values.terms === true &&
				formikRef.current.values.profilePicture !== null
			) {
				return 'filled';
			}
		}
		return 'outlined';
	}

	return (
		<div className={style.wrapper}>
			<h1>Form page</h1>
			<Steps currentStep={currentStep} />
			<Formik
				initialValues={initialValues[initialValues.length - 1]!}
				validationSchema={validation}
				onSubmit={() => {
					if (currentStep < 5) {
						setCurrentStep(currentStep + 1);
						setClick('next');
					}
				}}
				innerRef={formikRef as IFormikInnerRef}
			>
				{(formik) => (
					<section className={style.form__wrapper}>
						<motion.div
							key={currentStep}
							initial="initialState"
							animate="animateState"
							transition={{
								type: 'tween',
								duration: 0.5,
							}}
							variants={{
								initialState: {
									opacity: 0,
									x: click === 'next' ? '100%' : typeof click === 'undefined' ? '0%' : '-100%',
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
											currentStep={currentStep}
											setData={setData}
											loaderDataCountries={loaderData.countries}
											loaderDataLanguages={loaderData.languages}
										/>
									)}
								</Await>
							</Suspense>
						</motion.div>
						{currentStep !== 5 && (
							<div className={style.buttons}>
								{currentStep !== 1 && (
									<Button
										appearance={currentStep === 1 ? 'outlined' : 'filled'}
										className={style[`buttons_right`]}
										onClick={handlePrevStep}
									>
										Previous step
									</Button>
								)}
								<Button
									appearance={buttonAppearance()}
									onClick={handleClickSubmit}
									type={'submit'}
									className={style[`buttons_left`]}
								>
									{currentStep !== 4 ? 'Next step' : 'Finish'}
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
