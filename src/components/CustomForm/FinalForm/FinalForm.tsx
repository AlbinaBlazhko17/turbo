import CustomCheckbox from '@/components/CustomCheckbox/CustomCheckbox';
import CustomLabel from '@/components/CustomLabel/CustomLabel';
import { FormikErrors, FormikProps } from 'formik';
import CustomTextarea from '@/components/CustomTextarea/CustomTextarea';
import CustomInputImage from '@/components/CustomInputImage/CustomInputImage';
import { IDataForForm, IDataForSubmitForm } from '@/interfaces/IDataForForms';

import style from '../customForm.module.scss';

function FinalForm({ formik, setData }: { formik: FormikProps<IDataForForm>, setData: React.Dispatch<React.SetStateAction<IDataForForm | undefined>> }) {

	return (
		<form className={style.form}>
			<h2>Finalize & Submit</h2>
			<div className={style['form-item']}>
				<CustomLabel label='comments'>Additional comments</CustomLabel>
				<CustomTextarea formik={formik} label="comments" setData={setData} />
			</div>
			<div className={style['form-item']}>
				<CustomLabel label='comments'>Upload profile picture</CustomLabel>
				<CustomInputImage formik={formik} label="profilePicture" setData={setData} />
				{formik.errors.profilePicture && (
					<div className={style[`form-item__error`]}>{(formik.errors as FormikErrors<IDataForSubmitForm>).profilePicture}</div>
				)}
			</div>
			<div className={style['form-item']}>
				<CustomLabel label='comments'>Terms & conditions</CustomLabel>
				<CustomLabel label="terms" className={style['form-item__terms']}>
					<CustomCheckbox formik={formik} label="terms" setData={setData} />
					I accept the terms and conditions
				</CustomLabel>
				{formik.errors.terms && (
					<div className={style[`form-item__error`]}>{(formik.errors as FormikErrors<IDataForSubmitForm>).terms}</div>
				)}
			</div>
		</form>
	)
}

export default FinalForm;