import { SelectValue } from '@/customTypes/form.types';
import IFieldProps from '@/interfaces/IFieldProps';

export default interface PreferencesFormProps<T> extends IFieldProps<T> {
	loaderDataLanguages: SelectValue[];
}
