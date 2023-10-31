import { FormikProps } from 'formik';
import PersonalInfoForm from './PersonalInfoForm/PersonalInfoForm';
import { IDataForAddressForm, IDataForPersonalnfoForm, IDataForPreferencesForm, IDataForSubmitForm } from '@interfaces/IDataForForms';
import AddressForm from './AddressForm/AddressForm';

import style from './customForm.module.scss';
import { FormValues } from './formik';

function CustomForm ({formik, currentStep}: {formik: FormikProps<FormValues>, currentStep: number}) {

	switch (+currentStep) {
		case 1:
			return <PersonalInfoForm formik={formik as FormikProps<IDataForPersonalnfoForm>} />;
		case 2:
			return <AddressForm formik={formik as FormikProps<IDataForAddressForm>} />;
		default:
			return null;
	  }
}

export default CustomForm;