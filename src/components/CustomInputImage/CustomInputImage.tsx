import { useContext, useEffect, useRef } from 'react';
import CustomLabel from '../CustomLabel/CustomLabel';
import CustomInputImageProps from './CustomInputImage.props';
import { ThemeContext } from '@/theme/theme';
import cn from 'classnames';

import style from './customInputImage.module.scss';

function CustomInputImage<T>({ formik, label, setData }: CustomInputImageProps<T>) {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const { theme } = useContext(ThemeContext);

	const PROFILE_PICTURE = 'profilePicture' as keyof T;
	useEffect(() => {
		setData(formik.values);
	}, [formik.values]);

	function handleFileInputClick() {
		fileInputRef.current !== null && fileInputRef.current.click();
		if ('profilePicture' in formik.touched) {
			formik.touched.profilePicture = true;
		}
	}
	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && 'profilePicture' in formik.touched) {
			formik.setFieldValue(PROFILE_PICTURE, event.target.files[0].name);
		}
	};

	return (
		<>
			<div
				className={cn(style.inputImage, {
					[style.inputImage__dark]: theme === 'dark',
				})}
			>
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
					{!formik.values[PROFILE_PICTURE] ? 'No file chosen' : String(formik.values[PROFILE_PICTURE])}
				</CustomLabel>
			</div>
		</>
	);
}

export default CustomInputImage;
