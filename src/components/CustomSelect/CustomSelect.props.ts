import { SelectValue } from '@/customTypes/form.types';
import IFieldProps from '@/interfaces/IFieldProps';

export default interface CustomSelectProps extends Omit<IFieldProps, 'setData'> {
	data:
		| {
				countries: SelectValue[];
				userSelectValue: SelectValue;
		  }
		| SelectValue[];
	type: string;
}
