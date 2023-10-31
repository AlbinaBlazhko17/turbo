export interface IDataForPersonalnfoForm {
	firstName: string;
	lastName: string;
	gender: string;
	email: string;
}

export interface IDataForAddressForm {
	city: string;
	country: string;
	zipCode: string;
}

export interface IDataForPreferencesForm {
	interests: string[];
	language: string;
	notificationFrequency: number;
}

export interface IDataForSubmitForm {
	comment: string;
	profilePicture: File;
	terms: boolean;
}