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

export type formikProps = FormikProps<IDataForForm>;

export type IFormikInnerRef = (Ref<FormikProps<IDataForForm>> | undefined) & { current: IFormikRef };
