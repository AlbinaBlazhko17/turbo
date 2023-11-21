import { formikProps } from "@/customTypes/formik.types";
import { setDataType } from "@/customTypes/react.types";

export default interface IFieldProps {
	formik: formikProps,
	setData: setDataType
}