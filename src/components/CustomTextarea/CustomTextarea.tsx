import { ThemeContext } from '@/theme/theme';
import cn from 'classnames';
import { FormikProps } from 'formik';
import { useContext } from 'react';
import { FormValues } from '../CustomForm/formik';
import { IDataForForm } from '@/interfaces/IDataForForms';

import style from './customTextarea.module.scss';

function CustomTextarea({ formik, label, setData }: { formik: FormikProps<IDataForForm>, label: string, setData: React.Dispatch<React.SetStateAction<IDataForForm | undefined>> }) {
	const { theme } = useContext(ThemeContext);
	return (
		<textarea
			id={`${label}`}
			className={cn(style.textarea, style[`textarea__${theme}`])}
			onChange={() => { formik.handleChange(label as keyof FormValues); setData(formik.values) }}
			onBlur={formik.handleBlur}
			value={formik.values[label as keyof FormValues]}
		/>
	);
}

export default CustomTextarea;