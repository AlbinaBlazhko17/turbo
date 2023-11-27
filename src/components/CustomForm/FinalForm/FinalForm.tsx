import CustomCheckbox from '@/components/CustomCheckbox/CustomCheckbox';
import CustomInputImage from '@/components/CustomInputImage/CustomInputImage';
import CustomLabel from '@/components/CustomLabel/CustomLabel';
import CustomTextarea from '@/components/CustomTextarea/CustomTextarea';
import { EFormProps } from '@/customTypes/form.types';
import { IDataForSubmitForm } from '@/interfaces/IDataForForms';
import IFieldProps from '@/interfaces/IFieldProps';
import { FormikErrors } from 'formik';
import { useEffect } from 'react';

import style from '../customForm.module.scss';

function FinalForm({ formik, setData }: IFieldProps) {
	useEffect(() => {
		if (formik.values.comments !== '') {
			formik.touched.comments = true;
			formik.touched.profilePicture = false;
			formik.touched.terms = false;
		} else if (formik.values.profilePicture !== null) {
			formik.touched.comments = false;
			formik.touched.profilePicture = true;
			formik.touched.terms = false;
		} else if (formik.values.terms) {
			formik.touched.comments = false;
			formik.touched.profilePicture = false;
			formik.touched.terms = true;
		} else {
			formik.touched.comments = false;
			formik.touched.profilePicture = false;
			formik.touched.terms = false;
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
