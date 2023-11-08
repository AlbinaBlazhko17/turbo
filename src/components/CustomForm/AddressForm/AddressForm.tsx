import CustomInput from '@/components/CustomInput/CustomInput';
import { FormikErrors, FormikProps } from 'formik';
import CustomLabel from '@/components/CustomLabel/CustomLabel';
import CustomSelect from '@/components/CustomSelect/CustomSelect';
import { FormValues } from '../formik';
import { IDataForAddressForm } from '@/interfaces/IDataForForms';

import style from '../customForm.module.scss';

function AddressForm({ formik }: { formik: FormikProps<FormValues> }) {

	return (
		<form className={style.form}>
			<h2>Address Details</h2>
			<div className={style['form-item']}>
				<CustomLabel label="city">Address (City, Street, Appartaments)</CustomLabel>
				<CustomInput label="city" type="text" formik={formik} />
				{!formik.isSubmitting && (formik.errors as FormikErrors<IDataForAddressForm>).city && (
					<div className={style[`form-item__error`]}>{(formik.errors as FormikErrors<IDataForAddressForm>).city}</div>
				)}
			</div>
			<div className={style['form-item']}>
				<CustomLabel label='country'>Country</CustomLabel>
				<CustomSelect formik={formik} type='country' />
			</div>
			<div className={style['form-item']}>
				<CustomLabel label="zipCode">Postal Code</CustomLabel>
				<CustomInput label="zipCode" type="tel" formik={formik} />
				{!formik.isSubmitting && (formik.errors as FormikErrors<IDataForAddressForm>).zipCode && (
					<div className={style[`form-item__error`]}>{(formik.errors as IDataForAddressForm).zipCode}</div>
				)}
			</div>
		</form>
	)
}

export default AddressForm;