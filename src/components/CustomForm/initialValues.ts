import { IDataForPersonalnfoForm, IDataForAddressForm, IDataForPreferencesForm, IDataForSubmitForm} from "@/interfaces/IDataForForms"

export const initialValuesPersonalInfo: IDataForPersonalnfoForm = {
	firstName: '',
	lastName: '',
	email: '',
	gender: '',
}

export const initialValuesAddress: IDataForAddressForm = {
	city: '',
	country: '',
	zipCode: '',
}

export const initialValuesPreferences: IDataForPreferencesForm = {
	interests: [],
	language: '',
	notificationFrequency: 0,
}

export const initialValuesSubmit: IDataForSubmitForm = {
	comment: '',
	profilePicture: new File([], ''),
	terms: false,
}