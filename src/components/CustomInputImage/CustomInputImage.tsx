import { FormikProps } from "formik";
import { FormValues } from "../CustomForm/formik";
import { useRef, useState } from "react";
import CustomLabel from "../CustomLabel/CustomLabel";

import style from './customInputImage.module.scss';

function CustomInputImage({ formik, label }: { formik: FormikProps<FormValues>, label: string }) {
	const [file, setFile] = useState<File & { lastModifiedDate: Date }>();
	const fileInputRef = useRef(null);

	function handleFileInputClick() {
		fileInputRef.current !== null && fileInputRef.current.click();
	}

	const changeHandler = (event) => {
		setFile(event.target.files[0]);
		formik.setFieldValue('profilePicture', event.target.files[0]);
	};

	return (
		<>
			<div className={style.inputImage}>
				<input type="file" id={label} ref={fileInputRef} className={style.inputImage__file} onChange={changeHandler} />
				<input type="button" value="Choose file" className={style.inputImage__button} onClick={handleFileInputClick} />
				<CustomLabel label='file' className={style.inputImage__label}>{!file ? 'No file chosen' : file.name}</CustomLabel>
			</div>
		</>
	)
}

export default CustomInputImage