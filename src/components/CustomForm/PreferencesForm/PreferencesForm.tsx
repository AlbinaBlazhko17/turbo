import { CustomCheckbox, CustomSelect, CustomLabel } from '@/components';
import { EFormProps, EInterests, SelectValue } from '@/customTypes/form.types';
import { IDataForPreferencesForm } from '@/interfaces/IDataForForms';
import { FormikErrors } from 'formik';
import { useEffect, useMemo, useRef, useState } from 'react';
//@ts-ignore
import RangeSlider from 'react-range-slider-input';
import PreferencesFormProps from './PreferencesForm.props';

import 'react-range-slider-input/dist/style.css';
import style from '../customForm.module.scss';

interface IRangeSliderRef {
	element: React.RefObject<HTMLDivElement>;
	thumb: React.RefObject<HTMLDivElement>[];
	range: React.RefObject<HTMLDivElement>;
}

function PreferencesForm({ formik, setData, loaderDataLanguages }: PreferencesFormProps) {
	const [dataSelect, setDataSelect] = useState<SelectValue[]>();
	const rangeSliderRef = useRef<IRangeSliderRef>(null);

	useEffect(() => {
		if (
			rangeSliderRef.current &&
			rangeSliderRef.current.element.current &&
			rangeSliderRef.current.thumb[0].current &&
			rangeSliderRef.current.range.current
		) {
			rangeSliderRef.current.element.current.style.background =
				'linear-gradient(90deg, rgba(233, 245, 254, 1) 0%, rgba(33, 150, 243, 1) 76%, rgba(12, 127, 218, 1) 100%)';
			rangeSliderRef.current.thumb[0].current.style.width = '0px';
			rangeSliderRef.current.range.current.style.background = 'transparent';
		}
		setDataSelect(loaderDataLanguages);
	}, []);

	const memoizedDataSelect = useMemo(() => dataSelect, [dataSelect]);

	return (
		<form className={style.form}>
			<h2>Preferences & Settings</h2>
			<div className={style['form-item']}>
				<CustomLabel label={EFormProps.interests}>Interests</CustomLabel>
				<div className={style['form-item__checkbox']}>
					<CustomLabel label={EInterests.Reading}>
						<CustomCheckbox formik={formik} label={EInterests.Reading} setData={setData} />
						Reading
					</CustomLabel>

					<CustomLabel label={EInterests.Music}>
						<CustomCheckbox formik={formik} label={EInterests.Music} setData={setData} />
						Music
					</CustomLabel>

					<CustomLabel label={EInterests.Sports}>
						<CustomCheckbox formik={formik} label={EInterests.Sports} setData={setData} />
						Sports
					</CustomLabel>

					<CustomLabel label={EInterests.Gaming}>
						<CustomCheckbox formik={formik} label={EInterests.Gaming} setData={setData} />
						Gaming
					</CustomLabel>

					<CustomLabel label={EInterests.Traveling}>
						<CustomCheckbox formik={formik} label={EInterests.Traveling} setData={setData} />
						Traveling
					</CustomLabel>
				</div>

				{!formik.isSubmitting && formik.errors.interests && (
					<div className={style[`form-item__error`]}>{formik.errors.interests}</div>
				)}
			</div>
			<div className={style['form-item']}>
				<CustomLabel label={EFormProps.language}>Language</CustomLabel>
				{dataSelect && <CustomSelect data={memoizedDataSelect!} formik={formik} type={EFormProps.language} />}
				{!formik.isSubmitting && formik.errors.language && (
					<div className={style[`form-item__error`]}>
						{(formik.errors as FormikErrors<IDataForPreferencesForm>).language?.value}
					</div>
				)}
			</div>
			<div className={style['form-item']}>
				<CustomLabel label={EFormProps.notificationFrequency}>Notification frequency</CustomLabel>
				<RangeSlider
					ref={rangeSliderRef}
					defaultValue={[
						0,
						(EFormProps.notificationFrequency in formik.values && +formik.values.notificationFrequency) ||
							100,
					]}
					min={0}
					max={100}
					step={1}
					thumbsDisabled={[true, false]}
					rangeSlideDisabled={true}
					onInput={(e: Array<number>) => {
						formik.setFieldValue(EFormProps.notificationFrequency, e[1]);
						setData(formik.values);
					}}
				/>
				<div className={style.rangeSlider__footer}>
					<p>Rarely</p>
					<p>Often</p>
				</div>
				{!formik.isSubmitting && formik.errors.notificationFrequency && (
					<div className={style[`form-item__error`]}>{formik.errors.notificationFrequency}</div>
				)}
			</div>
		</form>
	);
}

export default PreferencesForm;
