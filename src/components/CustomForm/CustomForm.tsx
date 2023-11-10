import { FormikProps } from 'formik';
import PersonalInfoForm from './PersonalInfoForm/PersonalInfoForm';
import AddressForm from './AddressForm/AddressForm';
import PreferencesForm from './PreferencesForm/PreferencesForm';
import FinalForm from './FinalForm/FinalForm';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';
import { IDataForForm } from '@/interfaces/IDataForForms';

import style from './customForm.module.scss';

function CustomForm({ formik, currentStep, setData }: { formik: FormikProps<IDataForForm>, currentStep: number, setData: React.Dispatch<React.SetStateAction<IDataForForm>> }) {

	switch (+currentStep) {
		case 1:
			return <PersonalInfoForm formik={formik} setData={setData} />;
		case 2:
			return <AddressForm formik={formik} setData={setData} />;
		case 3:
			return <PreferencesForm formik={formik} setData={setData} />;
		case 4:
			return <FinalForm formik={formik} setData={setData} />;
		case 5:
			return <ConfirmationPage formik={formik} setData={setData} />;
		default:
			return null;
	}
}

export default CustomForm;