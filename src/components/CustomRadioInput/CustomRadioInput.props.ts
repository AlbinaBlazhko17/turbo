import IFieldProps from '@/interfaces/IFieldProps';

export default interface CustomRadioInputProps<T> extends IFieldProps<T> {
	name: string;
	value: string;
}
