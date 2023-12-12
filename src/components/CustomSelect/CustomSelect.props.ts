import { EFormProps, SelectValue } from '@/customTypes/form.types';
import IFieldProps from '@/interfaces/IFieldProps';

export default interface CustomSelectProps<T> extends Omit<IFieldProps<T>, 'setData'> {
	data:
		| {
				countries: SelectValue[];
				userSelectValue: SelectValue;
		  }
		| SelectValue[];
	type: EFormProps.country | EFormProps.language;
	disabled?: boolean;
}
