import { IDataForPersonalnfoForm, IDataForForm } from '@/interfaces/IDataForForms';

export const initialValuesPersonalInfo: IDataForPersonalnfoForm = {
	id: 1,
	firstName: '',
	lastName: '',
	email: '',
	gender: '',
};

export const allValues: IDataForForm = {
	id: 1,
	firstName: '',
	lastName: '',
	email: '',
	gender: '',
	city: '',
	country: {
		value: '',
		label: '',
	},
	zipCode: null,
	interests: [],
	language: {
		value: '',
		label: '',
	},
	notificationFrequency: 0,
	comments: '',
	profilePicture: null,
	terms: false,
};
