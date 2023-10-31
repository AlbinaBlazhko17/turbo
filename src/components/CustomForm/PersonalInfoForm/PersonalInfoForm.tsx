import { FormikProps } from 'formik';
import { IDataForPersonalnfoForm } from '@/interfaces/IDataForForms';

import style from '../customForm.module.scss';

function PersonalInfoForm ({formik}: {formik: FormikProps<IDataForPersonalnfoForm>}) {

	return (
		<form className={style.form} onSubmit={formik.handleSubmit}>
			<h2>Personal Information</h2>
			<label htmlFor="name" className={style.form__label}>First name</label>
			<input id="name" type="text" className={style.form__input} />
			<label htmlFor="surname" className={style.form__label}>Last name</label>
			<input id="surname" type="text" className={style.form__input}/>
			<label htmlFor="email" className={style.form__label}>Email</label>
			<input id="email" type="email" className={style.form__input} />
			<label>
				<input type="radio" name="gender" value="male" id="male" />
				Male
			</label>
			<label>
				<input type="radio" name="gender" value="female" id="female" />
				Female
			</label>
		</form>
	)
}

export default PersonalInfoForm;