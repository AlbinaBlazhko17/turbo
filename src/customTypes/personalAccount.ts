import { EFormProps } from './form.types';

export type IDataForPersonalAccount = {
	[EFormProps.firstName]: boolean;
	[EFormProps.lastName]: boolean;
	[EFormProps.email]: boolean;
	[EFormProps.city]: boolean;
	[EFormProps.city]: boolean;
	[EFormProps.country]: boolean;
	[EFormProps.zipCode]: boolean;
	[EFormProps.interests]: boolean;
	[EFormProps.notificationFrequency]: boolean;
	[EFormProps.date]: boolean;
	[EFormProps.language]: boolean;
};
