import { ThemeContext } from '@theme/theme';
import { FormikProps } from 'formik';
import { useContext } from 'react';
import cn from 'classnames';
import { FormValues } from '../CustomForm/formik';

import style from './customInput.module.scss';

function CustomInput({ formik, label, type }: { formik: FormikProps<FormValues>, label: string, type: string }) {
	const { theme } = useContext(ThemeContext);
	return (
		<input
			id={label}
			type={type}
			className={cn(style.input, style[`input__${theme}`], {
				[style[`input__error`]]: (formik.touched as { [key: string]: boolean })[label] && (formik.errors as { [key: string]: boolean })[label],
			})}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			value={formik.values[label as keyof FormValues]}
		/>
	)
}

export default CustomInput;