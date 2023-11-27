import { FormValues } from '@customTypes/formik.types';
import { useEffect } from 'react';
import CustomRadioInputProps from './CustomRadioInput.props';

import style from './customRadioInput.module.scss';

function customRadioInput({ formik, name, value, setData }: CustomRadioInputProps) {
	useEffect(() => {
		setData(formik.values);
	}, [formik.values]);

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
