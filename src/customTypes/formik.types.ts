import { IDataForAuth } from '@/interfaces/IDataForAuth';
import { IFormikRef } from '@/interfaces/IDataForFormik';
import {
	IDataForAddressForm,
	IDataForForm,
	IDataForPersonalnfoForm,
	IDataForPreferencesForm,
	IDataForSubmitForm,
} from '@interfaces/IDataForForms';
import { FormikProps } from 'formik';
import { Ref } from 'react';

export type FormValues = IDataForPersonalnfoForm | IDataForAddressForm | IDataForPreferencesForm | IDataForSubmitForm;

export type formikProps = FormikProps<IDataForForm | IDataForAuth>;

export type IFormikInnerRef = (Ref<FormikProps<IDataForForm>> | undefined) & { current: IFormikRef };
export type IFormikInnreRefAuth = (Ref<FormikProps<IDataForAuth>> | undefined) & { current: IFormikRef };
