import { IDataForAddressForm, IDataForForm, IDataForPersonalnfoForm, IDataForPreferencesForm, IDataForSubmitForm } from '@interfaces/IDataForForms';
import { FormikProps } from 'formik';

export type FormValues =
	| IDataForPersonalnfoForm
	| IDataForAddressForm
	| IDataForPreferencesForm
	| IDataForSubmitForm;

export type formikProps = FormikProps<IDataForForm>;