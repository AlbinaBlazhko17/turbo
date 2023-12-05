import { SelectValue } from '@/customTypes/form.types';
import IFieldProps from '@/interfaces/IFieldProps';

export default interface AddressFormProps extends IFieldProps {
	loaderDataCountries: {
		countries: SelectValue[];
		userSelectValue: SelectValue;
	};
}
