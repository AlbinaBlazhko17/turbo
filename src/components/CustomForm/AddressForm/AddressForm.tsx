import CustomInput from '@/components/CustomInput/CustomInput';
import { FormikProps } from 'formik';
import { IDataForAddressForm } from '@/interfaces/IDataForForms';

import style from '../customForm.module.scss';
import CustomLabel from '@/components/CustomLabel/CustomLabel';

function AddressForm ({formik}: {formik: FormikProps<IDataForAddressForm>}) {
	return (
		<form className={style.form}>
			<h2>Address Details</h2>
			<CustomLabel label="address">Address (City, Street, Appartaments)</CustomLabel>
			<CustomInput label="address" type="text" formik={formik} />
			<CustomLabel label='country'>Country</CustomLabel>
			<datalist id='country'>
				<option value='USA' />
				<option value='Canada' />
				<option value='Mexico' />
			</datalist>
			<CustomLabel label="zipCode">Postal Code</CustomLabel>
			<CustomInput label="zipCode" type="number" formik={formik} />
		</form>
	)
}

export default AddressForm;