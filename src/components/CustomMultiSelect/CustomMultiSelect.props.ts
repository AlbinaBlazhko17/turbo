import IFieldProps from '@/interfaces/IFieldProps';

export interface ICustomMultiSelectProps<T> extends Omit<IFieldProps<T>, 'setData'> {
	name: string;
}
