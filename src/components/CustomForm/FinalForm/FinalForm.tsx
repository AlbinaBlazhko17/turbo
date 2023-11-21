import CustomCheckbox from '@/components/CustomCheckbox/CustomCheckbox';
import CustomLabel from '@/components/CustomLabel/CustomLabel';
import { FormikErrors, FormikProps } from 'formik';
import CustomTextarea from '@/components/CustomTextarea/CustomTextarea';
import CustomInputImage from '@/components/CustomInputImage/CustomInputImage';
import { IDataForForm, IDataForSubmitForm } from '@/interfaces/IDataForForms';
import { useEffect } from 'react';
import { EFormProps } from '@/customTypes/form.types';

import style from '../customForm.module.scss';

function FinalForm({ formik, setData }: { formik: FormikProps<IDataForForm>, setData: React.Dispatch<React.SetStateAction<IDataForForm>> }) {

	useEffect(() => {
		if (formik.values.comments !== '') {
			formik.touched.comments = true;
			formik.touched.profilePicture = false;
			formik.touched.terms = false;
		} else if (formik.values.profilePicture !== '') {
			formik.touched.comments = false;
			formik.touched.profilePicture = true;
			formik.touched.terms = false;
		} else if (formik.values.terms) {
			formik.touched.comments = false;
			formik.touched.profilePicture = false;
			formik.touched.terms = true;
		}
	}, [formik.values])

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
					<div className={style[`form-item__error`]}>{(formik.errors as FormikErrors<IDataForSubmitForm>).profilePicture}</div>
				)}
			</div>
			<div className={style['form-item']}>
				<CustomLabel label={EFormProps.terms}>Terms & conditions</CustomLabel>
				<CustomLabel label="terms" className={style['form-item__terms']}>
					<CustomCheckbox formik={formik} label={EFormProps.terms} setData={setData} />
					I accept the terms and conditions
				</CustomLabel>
				{formik.touched.terms && formik.errors.terms && (
					<div className={style[`form-item__error`]}>{(formik.errors as FormikErrors<IDataForSubmitForm>).terms}</div>
				)}
			</div>
		</form>
	)
}

export default FinalForm;