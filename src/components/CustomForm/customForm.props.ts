import { SelectValue } from '@/customTypes/form.types';
import IFieldProps from '@/interfaces/IFieldProps';

export default interface CustomFormProps<T> extends IFieldProps<T> {
	currentStep: number;
	loaderDataCountries: {
		countries: SelectValue[];
		userSelectValue: SelectValue;
	};
	loaderDataLanguages: SelectValue[];
}
