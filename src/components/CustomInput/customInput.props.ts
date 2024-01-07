import IFieldProps from '@/interfaces/IFieldProps';
import { FormikValues } from 'formik';

export default interface CustomInputProps<T> extends IFieldProps<T> {
	label: keyof FormikValues;
	type: string;
	disabled?: boolean;
	className?: string;
}
