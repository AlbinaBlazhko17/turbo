import { ThemeContext } from '@theme/theme';
import { FormikProps } from 'formik';
import { useContext } from 'react';
import cn from 'classnames';
import { FormValues } from '../CustomForm/formik';

import style from './customInput.module.scss';

function CustomInput({ formik, label, type, value }: { formik: FormikProps<FormValues>, label: string, type: string, value?: string }) {
	const { theme } = useContext(ThemeContext);
	return (
		<input
			id={`${label}`}
			type={type}
			className={cn(style.input, style[`input__${theme}`], {
				[style[`input__error`]]: formik.touched[label] && formik.errors[label],
			})}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			value={formik.values[label]}
		/>
	)
}

export default CustomInput;