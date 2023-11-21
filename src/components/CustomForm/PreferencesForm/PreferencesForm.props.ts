import { SelectValue } from "@/customTypes/form.types";
import IFieldProps from "@/interfaces/IFieldProps";

export default interface PreferencesFormProps extends IFieldProps {
	loaderDataLanguages: SelectValue[]
}