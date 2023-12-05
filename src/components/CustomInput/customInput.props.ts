import IFieldProps from '@/interfaces/IFieldProps';

export default interface CustomInputProps extends IFieldProps {
	label: string;
	type: string;
	disabled?: boolean;
}
