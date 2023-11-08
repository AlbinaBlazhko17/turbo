import CustomSelect from "@/components/CustomSelect/CustomSelect";
import CustomLabel from "@components/CustomLabel/CustomLabel";
import { FormikProps } from "formik";
import CustomCheckbox from "@/components/CustomCheckbox/CustomCheckbox";
//@ts-ignore
import RangeSlider from 'react-range-slider-input';
import { FormValues } from "../formik";
import { IDataForPreferencesForm } from "@/interfaces/IDataForForms";

import 'react-range-slider-input/dist/style.css';
import style from '../customForm.module.scss';


function PreferencesForm({ formik }: { formik: FormikProps<FormValues> }) {

	return (
		<form className={style.form}>
			<h2>Preferences & Settings</h2>
			<div className={style['form-item']}>
				<CustomLabel label="interests">Interests</CustomLabel>
				<div className={style['form-item__checkbox']}>
					<CustomLabel label="Reading">
						<CustomCheckbox formik={formik} label="Reading" />
						Reading
					</CustomLabel>
					<CustomLabel label="Music">
						<CustomCheckbox formik={formik} label="Music" />
						Music
					</CustomLabel>
					<CustomLabel label="Sports">
						<CustomCheckbox formik={formik} label="Sports" />
						Sports
					</CustomLabel>
					<CustomLabel label="Gaming">
						<CustomCheckbox formik={formik} label="Gaming" />
						Gaming
					</CustomLabel>
					<CustomLabel label="Travel">
						<CustomCheckbox formik={formik} label="Travel" />
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
					<CustomSelect formik={formik} type="languages" />
				</div>
				{!formik.isSubmitting && (formik.errors as IDataForPreferencesForm).language && (
					<div className={style[`form-item__error`]}>{(formik.errors as IDataForPreferencesForm).language}</div>
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
						'notificationFrequency' in formik.values && (formik.values.notificationFrequency = e[1]);
					}}
				/>
				<div className={style.rangeSlider__footer}>
					<p>Rarely</p>
					<p>Often</p>
				</div>
			</div>
		</form>
	);
}

export default PreferencesForm;