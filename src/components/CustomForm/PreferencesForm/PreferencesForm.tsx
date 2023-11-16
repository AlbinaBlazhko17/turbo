import CustomSelect from "@/components/CustomSelect/CustomSelect";
import CustomLabel from "@components/CustomLabel/CustomLabel";
import { FormikErrors, FormikProps } from "formik";
import CustomCheckbox from "@/components/CustomCheckbox/CustomCheckbox";
import { IDataForForm, IDataForPreferencesForm } from "@/interfaces/IDataForForms";
import { useEffect, useMemo, useState } from "react";
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
				<CustomLabel label="interests">Interests</CustomLabel>
				<div className={style['form-item__checkbox']}>
					<CustomLabel label="Reading">
						<CustomCheckbox formik={formik} label="Reading" setData={setData} />
						Reading
					</CustomLabel>
					<CustomLabel label="Music">
						<CustomCheckbox formik={formik} label="Music" setData={setData} />
						Music
					</CustomLabel>
					<CustomLabel label="Sports">
						<CustomCheckbox formik={formik} label="Sports" setData={setData} />
						Sports
					</CustomLabel>
					<CustomLabel label="Gaming">
						<CustomCheckbox formik={formik} label="Gaming" setData={setData} />
						Gaming
					</CustomLabel>
					<CustomLabel label="Travel">
						<CustomCheckbox formik={formik} label="Travel" setData={setData} />
						Travel
					</CustomLabel>
				</div>
				{'interests' in formik.touched && 'interests' in formik.errors && !formik.isSubmitting && formik.errors.interests && (
					<div className={style[`form-item__error`]}>{formik.errors.interests}</div>
				)}
			</div>
			<div className={style['form-item']}>
				<CustomLabel label='language'>Language</CustomLabel>
				<div className={style[`form-item__language`]}>
					{dataSelect && <CustomSelect data={memoizedDataSelect!} formik={formik} type="languages" />}
				</div>
				{!formik.isSubmitting && formik.errors.language && (
					<div className={style[`form-item__error`]}>{(formik.errors as FormikErrors<IDataForPreferencesForm>).language?.value}</div>
				)}
			</div>
			<div className={style['form-item']}>
				<CustomLabel label='notification'>Notification frequency</CustomLabel>
				<RangeSlider
					defaultValue={[0, 'notificationFrequency' in formik.values && +formik.values.notificationFrequency || 100]}
					min={0}
					max={100}
					step={1}
					thumbsDisabled={[true, false]}
					rangeSlideDisabled={true}
					onInput={(e: Array<number>) => {
						formik.setFieldValue('notificationFrequency', e[1]);
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