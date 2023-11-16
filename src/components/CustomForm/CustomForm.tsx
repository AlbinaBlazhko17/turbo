import { FormikProps } from 'formik';
import PersonalInfoForm from './PersonalInfoForm/PersonalInfoForm';
import AddressForm from './AddressForm/AddressForm';
import PreferencesForm from './PreferencesForm/PreferencesForm';
import FinalForm from './FinalForm/FinalForm';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';
import { IDataForForm } from '@/interfaces/IDataForForms';

import style from './customForm.module.scss';

function CustomForm({ formik, currentStep, setData, loaderDataCountries, loaderDataLanguages }: { formik: FormikProps<IDataForForm>, currentStep: number, setData: React.Dispatch<React.SetStateAction<IDataForForm>>, loaderDataCountries: { countries: { value: string, label: string }[], userSelectValue: { value: string, label: string } }, loaderDataLanguages: { value: string, label: string }[] }) {

	switch (+currentStep) {
		case 1:
			return <PersonalInfoForm formik={formik} setData={setData} />;
		case 2:
			return <AddressForm formik={formik} setData={setData} loaderDataCountries={loaderDataCountries} />;
		case 3:
			return <PreferencesForm formik={formik} setData={setData} loaderDataLanguages={loaderDataLanguages} />;
		case 4:
			return <FinalForm formik={formik} setData={setData} />;
		case 5:
			return <ConfirmationPage formik={formik} setData={setData} />;
		default:
			return null;
	}
}

export default CustomForm;