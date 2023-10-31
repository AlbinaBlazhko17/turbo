import CustomInput from '@/components/CustomInput/CustomInput';
import { FormikProps } from 'formik';
import { IDataForAddressForm } from '@/interfaces/IDataForForms';

import style from '../customForm.module.scss';

function AddressForm ({formik}: {formik: FormikProps<IDataForAddressForm>}) {
	return (
		<form className={style.form}>
			<h2>Address Details</h2>
			<label htmlFor="address" className={style.form__label}>Address (City, Street, Blok)</label>
			{/* <CustomInput label="address" type="text" /> */}
			<label htmlFor='country' className={style.form__label}>Country</label>
			<datalist id='country'>
				<option value='USA' />
				<option value='Canada' />
				<option value='Mexico' />
			</datalist>
			<label htmlFor="zipCode">Postal Code</label>
			<input id="zipCode" type="number" className={style.form__input} />
		</form>
	)
}

export default AddressForm;