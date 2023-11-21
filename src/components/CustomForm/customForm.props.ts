import { SelectValue } from "@/customTypes/form.types";
import IFieldProps from "@/interfaces/IFieldProps";

export default interface CustomFormProps extends IFieldProps {
	currentStep: number,
	loaderDataCountries: {
		countries: SelectValue[],
		userSelectValue: SelectValue
	},
	loaderDataLanguages: SelectValue[]
}