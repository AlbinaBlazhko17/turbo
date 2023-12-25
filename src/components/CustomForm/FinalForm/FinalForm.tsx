import { CustomCheckbox, CustomInputImage, CustomLabel, CustomTextarea, CustomMultiSelect } from '@/components';
import { EFormProps } from '@/customTypes/form.types';
import { IDataForSubmitForm } from '@/interfaces/IDataForForms';
import IFieldProps from '@/interfaces/IFieldProps';
import { FormikErrors } from 'formik';
import { useEffect } from 'react';

import style from '../customForm.module.scss';

function FinalForm<T>({ formik, setData }: IFieldProps<T>) {
	useEffect(() => {
		formik.touched.comments = false;
		formik.touched.profilePicture = false;
		formik.touched.terms = false;
		formik.setErrors({});
	}, []);

	useEffect(() => {
		if (formik.values.comments !== '') {
			formik.initialTouched.comments = true;
			formik.initialTouched.profilePicture = false;
			formik.initialTouched.terms = false;
		}
	}, [formik.values]);

	return (
		<form className={style.form}>
			<h2>Finalize & Submit</h2>
			<div className={style['form-item']}>
				<CustomLabel label={EFormProps.comments}>Additional comments</CustomLabel>
				<CustomTextarea formik={formik} label={EFormProps.comments} setData={setData} />
			</div>
			<div className={style['form-item']}>
				<CustomLabel label={EFormProps.profilePicture}>Upload profile picture</CustomLabel>
				<CustomInputImage formik={formik} label={EFormProps.profilePicture} setData={setData} />
				{formik.touched.profilePicture && formik.errors.profilePicture && (
					<div className={style[`form-item__error`]}>
						{(formik.errors as FormikErrors<IDataForSubmitForm>).profilePicture}
					</div>
				)}
			</div>
			<div className={style['form-item']}>
				<CustomLabel label={EFormProps.profilePicture}>Type of buying products</CustomLabel>
				<CustomMultiSelect formik={formik} name={EFormProps.products} />
				{formik.touched.products && formik.errors.products && (
					<div className={style[`form-item__error`]}>
						{(formik.errors as FormikErrors<IDataForSubmitForm>).products}
					</div>
				)}
			</div>
			<div className={style['form-item']}>
				<CustomLabel label={EFormProps.terms}>Terms & conditions</CustomLabel>
				<CustomLabel label="terms" className={style['form-item__terms']}>
					<CustomCheckbox formik={formik} label={EFormProps.terms} setData={setData} />I accept the terms and
					conditions
				</CustomLabel>
				{formik.touched.terms && formik.errors.terms && (
					<div className={style[`form-item__error`]}>
						{(formik.errors as FormikErrors<IDataForSubmitForm>).terms}
					</div>
				)}
			</div>
		</form>
	);
}

export default FinalForm;
