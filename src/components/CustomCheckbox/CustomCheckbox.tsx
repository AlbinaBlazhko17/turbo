import { IDataForPreferencesForm, IDataForSubmitForm } from '@/interfaces/IDataForForms';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import CustomCheckboxProps from './CustomCheckbox.props';

import style from '../CustomInput/customInput.module.scss';

function CustomCheckbox<T>({ formik, label, setData }: CustomCheckboxProps<T>) {
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		setData(formik.values);
	}, [formik.values]);

	useEffect(() => {
		if (label !== 'terms') {
			if ((formik.values as IDataForPreferencesForm).interests !== undefined) {
				//@ts-ignore
				setIsChecked((formik.values as IDataForPreferencesForm).interests.includes(label));
			}
		} else {
			setIsChecked((formik.values as IDataForSubmitForm).terms);
		}
	}, [(formik.values as IDataForPreferencesForm).interests, label]);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
		const currentInterests = (formik.values as IDataForPreferencesForm).interests || [];

		if (isChecked) {
			const updatedInterests = currentInterests.filter((interest: string | undefined) => interest !== label);
			formik.setFieldValue('interests' as keyof T, updatedInterests);
		} else {
			const updatedInterests = [...currentInterests, label];
			formik.setFieldValue('interests' as keyof T, updatedInterests);
		}
	};

	return (
		<div className={style['input__checkbox__wrapper']}>
			<input
				id={`${label}`}
				type="checkbox"
				className={cn(style.input, [style[`input__checkbox`]])}
				onChange={(e) => {
					if (label !== 'terms') {
						handleCheckboxChange();
						formik.handleChange(e);
					} else {
						setIsChecked(!isChecked);
						formik.setFieldValue('terms' as keyof T, !(formik.values as IDataForSubmitForm).terms);
					}
				}}
				onBlur={formik.handleBlur}
				checked={isChecked}
			/>
		</div>
	);
}

export default CustomCheckbox;
