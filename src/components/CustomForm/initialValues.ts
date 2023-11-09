import { IDataForPersonalnfoForm, IDataForAddressForm, IDataForPreferencesForm, IDataForSubmitForm } from "@/interfaces/IDataForForms"

export const initialValuesPersonalInfo: IDataForPersonalnfoForm = {
	firstName: '',
	lastName: '',
	email: '',
	gender: '',
}

export const initialValuesAddress: IDataForAddressForm = {
	city: '',
	country: {
		value: '',
		label: '',
	},
	zipCode: null,
}

export const initialValuesPreferences: IDataForPreferencesForm = {
	interests: [],
	language: {
		value: '',
		label: '',
	},
	notificationFrequency: 0,
}

export const initialValuesSubmit: IDataForSubmitForm = {
	comment: '',
	profilePicture: null,
	terms: false,
}