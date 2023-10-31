import { FormikProps } from 'formik';
import { IDataForPersonalnfoForm } from '@/interfaces/IDataForForms';
import CustomInput from '@/components/CustomInput/CustomInput';

import style from '../customForm.module.scss';
import CustomLabel from '@components/CustomLabel/CustomLable';

function PersonalInfoForm ({formik}: {formik: FormikProps<IDataForPersonalnfoForm>}) {

	return (
		<form className={style.form} onSubmit={formik.handleSubmit}>
			<h2>Personal Information</h2>
			<CustomLabel label="firstName">First name</CustomLabel>
			<CustomInput formik={formik} label="firstName" type="text" />
			{formik.touched.firstName && formik.errors.firstName && (
				<div className="error">{formik.errors.firstName}</div>
			)}
			<CustomLabel label="lastName">Last name</CustomLabel>
			<CustomInput formik={formik} label="lastName" type="text" />
			{formik.touched.lastName && formik.errors.lastName && (
				<div className="error">{formik.errors.lastName}</div>)
			}
			<CustomLabel label="email">Email</CustomLabel>
			<CustomInput formik={formik} label="email" type="email" />
			{formik.touched.email && formik.errors.email && (
					<div className="error">{formik.errors.email}</div>)
			}
			<label>
				<input
					type="radio"
					name="gender"
					value="male"
					id="male"
					checked={formik.values.gender === 'male'}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				Male
			</label>
			<label>
				<input
					type="radio"
					name="gender"
					value="female"
					id="female"
					checked={formik.values.gender === 'female'}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				Female
			</label>
			{formik.touched.gender && formik.errors.gender && (
				<div className="error">{formik.errors.gender}</div>
			)}
		</form>
	)
}

export default PersonalInfoForm;