import { setStateActionType } from '@/customTypes/react.types';
import { FormikValues } from 'formik';

export default interface IFieldProps<T> {
	formik: FormikValues;
	setData: setStateActionType<T>;
}
