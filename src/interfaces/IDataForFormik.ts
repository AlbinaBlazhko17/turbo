import { FormikErrors, FormikValues } from 'formik';
import { ObjectSchema } from 'yup';
import { IDataForForm } from './IDataForForms';

export interface IFormikRef {
	dirty: boolean;
	errors: ObjectSchema<FormikErrors<FormikValues>>;
	touched: ObjectSchema<FormikValues>;
	values: IDataForForm;
	handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}
