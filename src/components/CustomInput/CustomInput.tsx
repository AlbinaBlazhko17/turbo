import { ThemeContext } from '@theme/theme';
import { FormikProps } from 'formik';
import { useContext, useEffect } from 'react';
import cn from 'classnames';
import { FormValues } from '../CustomForm/formik';
import { IDataForForm } from '@/interfaces/IDataForForms';

import style from './customInput.module.scss';

function CustomInput({ formik, label, type, setData }: { formik: FormikProps<IDataForForm>, label: string, type: string, setData: React.Dispatch<React.SetStateAction<IDataForForm>> }) {
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		setData(formik.values);
	}, [formik.values]);

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