import CustomSelect from "@/components/CustomSelect/CustomSelect";
import CustomLabel from "@components/CustomLabel/CustomLabel";
import { FormikErrors, FormikProps } from "formik";
import CustomCheckbox from "@/components/CustomCheckbox/CustomCheckbox";
import { IDataForForm, IDataForPreferencesForm } from "@/interfaces/IDataForForms";
import { useEffect, useMemo, useState } from "react";
import { EFormProps, EInterests } from '@/customTypes/form.types';
//@ts-ignore
import RangeSlider from 'react-range-slider-input';

import 'react-range-slider-input/dist/style.css';
import style from '../customForm.module.scss';


function PreferencesForm({ formik, setData, loaderDataLanguages }: { formik: FormikProps<IDataForForm>, setData: React.Dispatch<React.SetStateAction<IDataForForm>>, loaderDataLanguages: { value: string, label: string }[] }) {
	const [dataSelect, setDataSelect] = useState<{ value: string, label: string }[]>();

	useEffect(() => {
		setDataSelect(loaderDataLanguages);
	}, [])

	const memoizedDataSelect = useMemo(() => dataSelect, [dataSelect]);

	return (
		<form className={style.form}>
			<h2>Preferences & Settings</h2>
			<div className={style['form-item']}>
				<CustomLabel label={EFormProps.interestes}>Interests</CustomLabel>
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
				{EFormProps.interestes in formik.touched && EFormProps.interestes in formik.errors && !formik.isSubmitting && formik.errors.interests && (
					<div className={style[`form-item__error`]}>{formik.errors.interests}</div>
				)}
			</div>
			<div className={style['form-item']}>
				<CustomLabel label={EFormProps.language}>Language</CustomLabel>
				<div className={style[`form-item__language`]}>
					{dataSelect && <CustomSelect data={memoizedDataSelect!} formik={formik} type={EFormProps.language} />}
				</div>
				{!formik.isSubmitting && formik.errors.language && (
					<div className={style[`form-item__error`]}>{(formik.errors as FormikErrors<IDataForPreferencesForm>).language?.value}</div>
				)}
			</div>
			<div className={style['form-item']}>
				<CustomLabel label={EFormProps.notificationFrequency}>Notification frequency</CustomLabel>
				<RangeSlider
					defaultValue={[0, EFormProps.notificationFrequency in formik.values && +formik.values.notificationFrequency || 100]}
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