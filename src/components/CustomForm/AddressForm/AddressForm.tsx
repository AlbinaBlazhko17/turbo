import { CustomInput, CustomLabel, CustomSelect } from '@/components';
import { EFormProps, SelectValue } from '@/customTypes/form.types';
import { IDataForAddressForm } from '@/interfaces/IDataForForms';
import { FormikErrors } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import AddressFormProps from './AddressForm.props';

import style from '../customForm.module.scss';

function AddressForm({ formik, setData, loaderDataCountries }: AddressFormProps) {
	const [dataSelect, setDataSelect] = useState<{
		countries: SelectValue[];
		userSelectValue: SelectValue;
	}>();

	useEffect(() => {
		setDataSelect(loaderDataCountries);
		formik.setFieldTouched(EFormProps.city, false);
		formik.setFieldTouched(EFormProps.zipCode, false);
	}, []);

	const memoizedDataSelect = useMemo(() => dataSelect, [dataSelect]);

	return (
		<form className={style.form}>
			<h2>Address Details</h2>
			<div className={style['form-item']}>
				<CustomLabel label={EFormProps.city}>Address (City, Street, Appartaments)</CustomLabel>
				<CustomInput label={EFormProps.city} type="text" formik={formik} setData={setData} />
				{!formik.isSubmitting && (formik.errors as FormikErrors<IDataForAddressForm>).city && (
					<div className={style[`form-item__error`]}>
						{(formik.errors as FormikErrors<IDataForAddressForm>).city}
					</div>
				)}
			</div>
			<div className={style['form-item']}>
				<CustomLabel label={EFormProps.country}>Country</CustomLabel>
				{dataSelect && <CustomSelect data={memoizedDataSelect!} formik={formik} type={EFormProps.country} />}
			</div>
			<div className={style['form-item']}>
				<CustomLabel label={EFormProps.zipCode}>Postal Code</CustomLabel>
				<CustomInput label={EFormProps.zipCode} type="tel" formik={formik} setData={setData} />
				{!formik.isSubmitting && (formik.errors as FormikErrors<IDataForAddressForm>).zipCode && (
					<div className={style[`form-item__error`]}>{formik.errors.zipCode}</div>
				)}
			</div>
		</form>
	);
}

export default AddressForm;
