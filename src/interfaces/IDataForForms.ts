export interface IDataForPersonalnfoForm {
	firstName: string;
	lastName: string;
	gender: string;
	email: string;
}

export interface IDataForAddressForm {
	city: string;
	country: string;
	zipCode: number;
}

export interface IDataForPreferencesForm {
	interests: (string | undefined)[];
	language: string;
	notificationFrequency: number;
}

export interface IDataForSubmitForm {
	comment: string | null | undefined;
	profilePicture: File | undefined;
	terms: Required<boolean> | null | undefined;
}