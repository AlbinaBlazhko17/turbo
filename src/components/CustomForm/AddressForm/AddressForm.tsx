import CustomInput from '@/components/CustomInput/CustomInput';
import { FormikErrors, FormikProps } from 'formik';
import CustomLabel from '@/components/CustomLabel/CustomLabel';
import CustomSelect from '@/components/CustomSelect/CustomSelect';
import { IDataForAddressForm, IDataForForm } from '@/interfaces/IDataForForms';
import { useEffect } from 'react';

import style from '../customForm.module.scss';

function AddressForm({ formik, setData }: { formik: FormikProps<IDataForForm>, setData: React.Dispatch<React.SetStateAction<IDataForForm>> }) {

	useEffect(() => {
		formik.setFieldTouched('city', false);
		formik.setFieldTouched('zipCode', false);
	}, []);


	return (
		<form className={style.form}>
			<h2>Address Details</h2>
			<div className={style['form-item']}>
				<CustomLabel label="city">Address (City, Street, Appartaments)</CustomLabel>
				<CustomInput label="city" type="text" formik={formik} setData={setData} />
				{!formik.isSubmitting && (formik.errors as FormikErrors<IDataForAddressForm>).city && (
					<div className={style[`form-item__error`]}>{(formik.errors as FormikErrors<IDataForAddressForm>).city}</div>
				)}
			</div>
			<div className={style['form-item']}>
				<CustomLabel label='country'>Country</CustomLabel>
				<CustomSelect formik={formik} type='country' setData={setData} />
			</div>
			<div className={style['form-item']}>
				<CustomLabel label="zipCode">Postal Code</CustomLabel>
				<CustomInput label="zipCode" type="tel" formik={formik} setData={setData} />
				{!formik.isSubmitting && (formik.errors as FormikErrors<IDataForAddressForm>).zipCode && (
					<div className={style[`form-item__error`]}>{formik.errors.zipCode}</div>
				)}
			</div>
		</form>
	)
}

export default AddressForm;