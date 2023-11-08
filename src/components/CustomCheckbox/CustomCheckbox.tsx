import { FormikProps } from "formik";
import { FormValues } from "../CustomForm/formik";
import { useEffect, useState } from "react";
import cn from 'classnames';

import style from '../CustomInput/customInput.module.scss';
import { IDataForPreferencesForm, IDataForSubmitForm } from "@/interfaces/IDataForForms";

function CustomCheckbox({ formik, label }: { formik: FormikProps<FormValues>, label: string }) {
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		label !== 'terms'
			// @ts-ignore
			? setIsChecked((formik.values as IDataForPreferencesForm).interests.includes(label))
			: setIsChecked((formik.values as IDataForSubmitForm).terms);
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