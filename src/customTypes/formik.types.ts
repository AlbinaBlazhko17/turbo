import { IDataForAddressForm, IDataForPersonalnfoForm, IDataForPreferencesForm, IDataForSubmitForm } from '@interfaces/IDataForForms';

export type FormValues =
	| IDataForPersonalnfoForm
	| IDataForAddressForm
	| IDataForPreferencesForm
	| IDataForSubmitForm;