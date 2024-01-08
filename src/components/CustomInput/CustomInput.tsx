import { ThemeContext } from '@theme/theme';
import cn from 'classnames';
import { FormikValues } from 'formik';
import { useContext, useEffect } from 'react';
import CustomInputProps from './customInput.props';

import style from './customInput.module.scss';

function CustomInput<T extends FormikValues>({
	formik,
	label,
	type,
	setData,
	className,
	...props
}: CustomInputProps<T>) {
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		setData(formik.values);
	}, [formik.values]);

	return (
		<input
			id={label.toString()}
			type={type}
			className={cn(style.input, style[`input__${theme}`], className, {
				[style[`input__error`]]: formik.touched[label] && formik.errors[label],
			})}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			value={formik.values[label] || ''}
			{...props}
		/>
	);
}

export default CustomInput;
