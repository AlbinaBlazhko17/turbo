import { ThemeContext } from '@/theme/theme';
import cn from 'classnames';
import { useContext, useEffect } from 'react';
import { FormValues } from '../../customTypes/formik.types';
import CustomTextareaProps from './CustomTextarea.props';

import style from './customTextarea.module.scss';

function CustomTextarea<T>({ formik, label, setData }: CustomTextareaProps<T>) {
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		setData(formik.values);
	}, [formik.values]);

	return (
		<textarea
			id={`${label}`}
			className={cn(style.textarea, style[`textarea__${theme}`])}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			value={formik.values[label as keyof FormValues]}
		/>
	);
}

export default CustomTextarea;
