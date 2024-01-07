import { SelectValue } from '@/customTypes/form.types';
import { IDataForForm } from '@/interfaces/IDataForForms';
import IFieldProps from '@/interfaces/IFieldProps';

export default interface AddressFormProps extends IFieldProps<IDataForForm> {
	loaderDataCountries: {
		countries: SelectValue[];
		userSelectValue: SelectValue;
	};
}
