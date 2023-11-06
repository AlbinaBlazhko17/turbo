import { FormikProps } from "formik";
import { FormValues } from "../CustomForm/formik";
import { useEffect, useState } from "react";
import cn from 'classnames';

import style from '../CustomInput/customInput.module.scss';

function CustomCheckbox({ formik, label }: { formik: FormikProps<FormValues>, label: string }) {
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		setIsChecked(formik.values.interests && formik.values.interests.includes(label));
	}, [formik.values.interests, label]);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
		const currentInterests = formik.values.interests || [];

		if (isChecked) {
			const updatedInterests = currentInterests.filter((interest) => interest !== label);
			formik.setFieldValue('interests', updatedInterests);
		} else {
			const updatedInterests = [...currentInterests, label];
			formik.setFieldValue('interests', updatedInterests);
		}
	};

	console.log(formik.values)
	return (
		<input
			id={`${label}`}
			type='checkbox'
			className={cn(style.input,
				[style[`input__checkbox`]]
			)}
			onChange={(e) => {
				handleCheckboxChange();
				formik.handleChange(e);
			}}
			onBlur={formik.handleBlur}
			checked={isChecked}
		/>
	)
}

export default CustomCheckbox;