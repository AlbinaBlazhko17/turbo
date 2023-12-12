import { IDataForAuth } from '@/interfaces/IDataForAuth';
import { IFormikRef } from '@/interfaces/IDataForFormik';
import { IPassword } from '@/interfaces/IDataForPassword';
import {
	IDataForAddressForm,
	IDataForForm,
	IDataForPersonalnfoForm,
	IDataForPreferencesForm,
	IDataForSubmitForm,
} from '@interfaces/IDataForForms';
import { Formik, FormikProps } from 'formik';
import { Ref } from 'react';

export type FormValues = IDataForPersonalnfoForm | IDataForAddressForm | IDataForPreferencesForm | IDataForSubmitForm;

export type formikProps = FormikProps<typeof Formik>;

export type IFormikInnerRef = (Ref<FormikProps<IDataForForm>> | undefined) & { current: IFormikRef };
export type IFormikInnreRefAuth = (Ref<FormikProps<IDataForAuth>> | undefined) & { current: IFormikRef };
export type IFormikInnreRefPassword = Ref<FormikProps<IPassword>> | undefined;
