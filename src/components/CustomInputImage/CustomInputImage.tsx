import { useEffect, useRef } from 'react';
import CustomLabel from '../CustomLabel/CustomLabel';
import CustomInputImageProps from './CustomInputImage.props';

import style from './customInputImage.module.scss';

function CustomInputImage({ formik, label, setData }: CustomInputImageProps) {
	const fileInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		setData(formik.values);
	}, [formik.values]);

	function handleFileInputClick() {
		fileInputRef.current !== null && fileInputRef.current.click();
	}

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			formik.setFieldValue('profilePicture', event.target.files[0].name);
		}
	};

	return (
		<>
			<div className={style.inputImage}>
				<input
					type="file"
					id={label}
					ref={fileInputRef}
					className={style.inputImage__file}
					onChange={changeHandler}
				/>
				<input
					type="button"
					value="Choose file"
					className={style.inputImage__button}
					onClick={handleFileInputClick}
				/>
				<CustomLabel label="file" className={style.inputImage__label}>
					{!formik.values['profilePicture'] ? 'No file chosen' : formik.values['profilePicture']}
				</CustomLabel>
			</div>
		</>
	);
}

export default CustomInputImage;
