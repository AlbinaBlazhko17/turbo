import { FormValues } from '@customTypes/formik.types';
import CustomRadioInputProps from './CustomRadioInput.props';

import style from './customRadioInput.module.scss';

function customRadioInput({ formik, name, value, setData }: CustomRadioInputProps) {
	return (
		<input
			className={style.radio}
			type="radio"
			name={name}
			value={value}
			id={value}
			checked={formik.values[name as keyof FormValues] === value}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
		/>
	);
}

export default customRadioInput;
