import CountrySelect from "@components/CountrySelect/CountrySelect";
import CustomInput from "@components/CustomInput/CustomInput";
import CustomLabel from "@components/CustomLabel/CustomLabel";
import { IDataForPreferencesForm } from "@interfaces/IDataForForms";
import { FormikProps } from "formik";

import style from '../customForm.module.scss';


function PreferencesForm({formik}: {formik: FormikProps<IDataForPreferencesForm>}) {
  return (
	<form className={style.form}>
			<h2>Preferences & Settings</h2>
			<CustomLabel label="interests">Interests</CustomLabel>
			<CustomLabel label='country'>Language</CustomLabel>
			<CountrySelect formik={formik} />
		</form>
  );
}

export default PreferencesForm;