import CustomSelect from "@/components/CustomSelect/CustomSelect";
import CustomInput from "@components/CustomInput/CustomInput";
import CustomLabel from "@components/CustomLabel/CustomLabel";
import { IDataForPreferencesForm } from "@interfaces/IDataForForms";
import { FormikProps } from "formik";
import CustomCheckbox from "@/components/CustomCheckbox/CustomCheckbox";
import RangeSlider from 'react-range-slider-input';

import 'react-range-slider-input/dist/style.css';
import style from '../customForm.module.scss';


function PreferencesForm({ formik }: { formik: FormikProps<IDataForPreferencesForm> }) {
	return (
		<form className={style.form}>
			<h2>Preferences & Settings</h2>
			<div className={style['form-item']}>
				<CustomLabel label="interests">Interests</CustomLabel>
				<div className={style['form-item__checkbox']}>
					<CustomLabel label="Reading">
						<CustomCheckbox formik={formik} label="Reading" type="checkbox" />
						Reading
					</CustomLabel>
					<CustomLabel label="Music">
						<CustomCheckbox formik={formik} label="Music" type="checkbox" />
						Music
					</CustomLabel>
					<CustomLabel label="Sports">
						<CustomCheckbox formik={formik} label="Sports" type="checkbox" />
						Sports
					</CustomLabel>
					<CustomLabel label="Gaming">
						<CustomCheckbox formik={formik} label="Gaming" type="checkbox" />
						Gaming
					</CustomLabel>
					<CustomLabel label="Travel">
						<CustomCheckbox formik={formik} label="Travel" type="checkbox" />
						Travel
					</CustomLabel>
				</div>
				{!formik.isSubmitting && formik.errors.interests && (
					<div className={style[`form-item__error`]}>{formik.errors.interests}</div>
				)}
			</div>
			<div className={style['form-item']}>
				<CustomLabel label='country'>Language</CustomLabel>
				<CustomSelect formik={formik} type="language" />
			</div>
			<div className={style['form-item']}>
				<CustomLabel label='country'>Notification frequency</CustomLabel>
				<RangeSlider
					defaultValue={[0, +formik.values.rangeSlider || 100]}
					min={0}
					max={100}
					step={1}
					thumbsDisabled={[true, false]}
					rangeSlideDisabled={true}
					onInput={(e) => {
						formik.setFieldValue('rangeSlider', e[1]);
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