import { FormikProps } from 'formik';
import PersonalInfoForm from './PersonalInfoForm/PersonalInfoForm';
import { IDataForAddressForm, IDataForPersonalnfoForm, IDataForPreferencesForm, IDataForSubmitForm } from '@interfaces/IDataForForms';
import AddressForm from './AddressForm/AddressForm';
import { FormValues } from './formik';
import PreferencesForm from './PreferencesForm/PreferencesForm';
import FinalForm from './FinalForm/FinalForm';

import style from './customForm.module.scss';

function CustomForm({ formik, currentStep }: { formik: FormikProps<FormValues>, currentStep: number }) {

	switch (+currentStep) {
		case 1:
			return <PersonalInfoForm formik={formik as FormikProps<IDataForPersonalnfoForm>} />;
		case 2:
			return <AddressForm formik={formik as FormikProps<IDataForAddressForm>} />;
		case 3:
			return <PreferencesForm formik={formik as FormikProps<IDataForPreferencesForm>} />;
		case 4:
			return <FinalForm formik={formik as FormikProps<IDataForSubmitForm>} />;
		default:
			return null;
	}
}

export default CustomForm;