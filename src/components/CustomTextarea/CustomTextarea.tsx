import { ThemeContext } from '@/theme/theme';
import cn from 'classnames';
import { FormikProps } from 'formik';
import { useContext, useEffect } from 'react';
import { FormValues } from '../../customTypes/formik.types';
import { IDataForForm } from '@/interfaces/IDataForForms';

import style from './customTextarea.module.scss';

function CustomTextarea({ formik, label, setData }: { formik: FormikProps<IDataForForm>, label: string, setData: React.Dispatch<React.SetStateAction<IDataForForm>> }) {
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