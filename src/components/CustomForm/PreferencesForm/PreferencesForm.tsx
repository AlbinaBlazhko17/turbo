import CountrySelect from "@components/CountrySelect/CountrySelect";
import CustomInput from "@components/CustomInput/CustomInput";
import CustomLabel from "@components/CustomLabel/CustomLabel";
import { IDataForPreferencesForm } from "@interfaces/IDataForForms";
import { FormikProps } from "formik";

import style from '../customForm.module.scss';
import CustomCheckbox from "@/components/CustomCheckbox/CustomCheckbox";


function PreferencesForm({ formik }: { formik: FormikProps<IDataForPreferencesForm> }) {
	return (
		<form className={style.form}>
			<h2>Preferences & Settings</h2>
			<div className={style['form-item']}>
				<CustomLabel label="interests">Interests</CustomLabel>
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
				{!formik.isSubmitting && formik.errors.interests && (
					<div className={style[`form-item__error`]}>{formik.errors.interests}</div>
				)}
			</div>
			<div className={style['form-item']}>
				<CustomLabel label='country'>Language</CustomLabel>
				<CountrySelect formik={formik} />
			</div>
		</form>
	);
}

export default PreferencesForm;