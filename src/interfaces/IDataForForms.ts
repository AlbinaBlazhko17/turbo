import { FormValues } from "@/customTypes/formik.types";
import { FormikErrors, FormikTouched } from "formik";

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
	comments: string | null | undefined;
	profilePicture: string | null;
	terms: boolean;
}

export interface IDataForForm extends IDataForPersonalnfoForm, IDataForAddressForm, IDataForPreferencesForm, IDataForSubmitForm {
	id: number,
	date: Date
}

export interface InputProps {
	label: string
	name: string
	values: IDataForForm
	validationSchema: FormValues,
	placeholder?: string
	errors?: FormikErrors<{
		[field: string]: any
	}>
	touched?: FormikTouched<{
		[field: string]: any
	}>
	autofocus?: boolean
	disabled?: boolean
}