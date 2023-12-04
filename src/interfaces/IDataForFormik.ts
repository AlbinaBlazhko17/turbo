import { FormValues } from '@/customTypes/formik.types';
import { FormikErrors, FormikValues } from 'formik';
import { ObjectSchema } from 'yup';

export interface IFormikRef {
	dirty: boolean;
	errors: ObjectSchema<FormikErrors<FormikValues>>;
	touched: ObjectSchema<FormikValues>;
	values: FormValues;
}
