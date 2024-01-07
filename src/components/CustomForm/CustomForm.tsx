import { IDataForForm } from '@/interfaces/IDataForForms';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';
import AddressForm from './AddressForm/AddressForm';
import FinalForm from './FinalForm/FinalForm';
import PersonalInfoForm from './PersonalInfoForm/PersonalInfoForm';
import PreferencesForm from './PreferencesForm/PreferencesForm';
import CustomFormProps from './customForm.props';

function CustomForm({
	formik,
	currentStep,
	setData,
	loaderDataCountries,
	loaderDataLanguages,
}: CustomFormProps<IDataForForm>) {
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
