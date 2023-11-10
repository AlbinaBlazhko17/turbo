import { FormikProps } from "formik";
import { useRef, useState } from "react";
import CustomLabel from "../CustomLabel/CustomLabel";
import { IDataForForm } from "@/interfaces/IDataForForms";

import style from './customInputImage.module.scss';

function CustomInputImage({ formik, label, setData }: { formik: FormikProps<IDataForForm>, label: string, setData: React.Dispatch<React.SetStateAction<IDataForForm | undefined>> }) {
	const fileInputRef = useRef<HTMLInputElement>(null);

	function handleFileInputClick() {
		fileInputRef.current !== null && fileInputRef.current.click();
	}

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			formik.setFieldValue('profilePicture', event.target.files[0]);
			setData(formik.values);
		}
	};

	return (
		<>
			<div className={style.inputImage}>
				<input type="file" id={label} ref={fileInputRef} className={style.inputImage__file} onChange={changeHandler} />
				<input type="button" value="Choose file" className={style.inputImage__button} onClick={handleFileInputClick} />
				<CustomLabel label='file' className={style.inputImage__label}>{!formik.values['profilePicture'] ? 'No file chosen' : formik.values['profilePicture'].name}</CustomLabel>
			</div>
		</>
	)
}

export default CustomInputImage