import CustomInput from '@/components/CustomInput/CustomInput';
import { FormikProps } from 'formik';
import CustomLabel from '@/components/CustomLabel/CustomLabel';
import CustomSelect from '@/components/CustomSelect/CustomSelect';
import { FormValues } from '../formik';

import style from '../customForm.module.scss';

function AddressForm({ formik }: { formik: FormikProps<FormValues> }) {

	return (
		<form className={style.form}>
			<h2>Address Details</h2>
			<div className={style['form-item']}>
				<CustomLabel label="city">Address (City, Street, Appartaments)</CustomLabel>
				<CustomInput label="city" type="text" formik={formik} />
				{'city' in formik.touched && 'city' in formik.errors && !formik.isSubmitting && formik.errors.city && (
					<div className={style[`form-item__error`]}>{formik.errors.city}</div>
				)}
			</div>
			<div className={style['form-item']}>
				<CustomLabel label='country'>Country</CustomLabel>
				<CustomSelect formik={formik} type='country' />
			</div>
			<div className={style['form-item']}>
				<CustomLabel label="zipCode">Postal Code</CustomLabel>
				<CustomInput label="zipCode" type="tel" formik={formik} />
				{'zipCode' in formik.touched && 'zipCode' in formik.errors && !formik.isSubmitting && formik.errors.zipCode && (
					<div className={style[`form-item__error`]}>{formik.errors.zipCode}</div>
				)}
			</div>
		</form>
	)
}

export default AddressForm;