import { ThemeContext } from '@theme/theme';
import { useContext, useEffect } from 'react';
import cn from 'classnames';
import { FormValues } from '../../customTypes/formik.types';
import CustomInputProps from './customInput.props';

import style from './customInput.module.scss';

function CustomInput({ formik, label, type, setData, className, ...props }: CustomInputProps) {
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		setData(formik.values);
	}, [formik.values]);

	return (
		<input
			id={label}
			type={type}
			className={cn(style.input, style[`input__${theme}`], className, {
				[style[`input__error`]]:
					(formik.touched as { [key: string]: boolean })[label] &&
					(formik.errors as { [key: string]: boolean })[label],
			})}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			value={formik.values[label as keyof FormValues] || ''}
			{...props}
		/>
	);
}

export default CustomInput;
