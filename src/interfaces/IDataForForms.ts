export interface IDataForPersonalnfoForm {
	firstName: string;
	lastName: string;
	gender: string;
	email: string;
}

export interface IDataForAddressForm {
	city: string;
	country: {
		value: string;
		label: string;
	};
	zipCode: number | null;
}

export interface IDataForPreferencesForm {
	interests: (string | undefined)[];
	language: {
		value: string;
		label: string;
	};
	notificationFrequency: number;
}

export interface IDataForSubmitForm {
	comment: string | null | undefined;
	profilePicture: File | null;
	terms: boolean;
}

export interface IDataForForm extends IDataForPersonalnfoForm, IDataForAddressForm, IDataForPreferencesForm, IDataForSubmitForm { }