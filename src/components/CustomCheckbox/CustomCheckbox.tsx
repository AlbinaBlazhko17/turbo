import { FormikProps } from "formik";
import { FormValues } from "../CustomForm/formik";
import { useEffect, useState } from "react";
import cn from 'classnames';
import { IDataForPreferencesForm, IDataForSubmitForm } from "@/interfaces/IDataForForms";

import style from '../CustomInput/customInput.module.scss';

function CustomCheckbox({ formik, label }: { formik: FormikProps<FormValues>, label: string }) {
	const [isChecked, setIsChecked] = useState(false);

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
			formik.setFieldValue('interests', updatedInterests);
		} else {
			const updatedInterests = [...currentInterests, label];
			formik.setFieldValue('interests', updatedInterests);
		}
	};

	return (
		<input
			id={`${label}`}
			type='checkbox'
			className={cn(style.input,
				[style[`input__checkbox`]]
			)}
			onChange={(e) => {
				if (label !== 'terms') {
					handleCheckboxChange();
					formik.handleChange(e);
				} else {
					formik.setFieldValue('terms', !(formik.values as IDataForSubmitForm).terms);
				}
			}}
			onBlur={formik.handleBlur}
			checked={isChecked}
		/>
	)
}

export default CustomCheckbox;