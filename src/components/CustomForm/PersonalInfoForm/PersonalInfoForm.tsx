import { FormikProps } from 'formik';
import { IDataForPersonalnfoForm } from '@/interfaces/IDataForForms';
import CustomLabel from '@/components/CustomLabel/CustomLabel';
import CustomInput from '@/components/CustomInput/CustomInput';

import style from '../customForm.module.scss';

function PersonalInfoForm ({formik}: {formik: FormikProps<IDataForPersonalnfoForm>}) {

	return (
		<>
			<h2>Personal Information</h2>
			<form className={style.form} onSubmit={formik.handleSubmit}>
				<div className={style['form-item']}>
					<CustomLabel label="firstName">First name</CustomLabel>
					<CustomInput formik={formik} label="firstName" type="text" />
					{formik.touched.firstName && formik.errors.firstName && (
						<div className={style.error}>{formik.errors.firstName}</div>
					)}
				</div>
				<div className={style['form-item']}>
					<CustomLabel label="lastName">Last name</CustomLabel>
					<CustomInput formik={formik} label="lastName" type="text" />
					{formik.touched.lastName && formik.errors.lastName && (
						<div className={style.error}>{formik.errors.lastName}</div>)
					}
				</div>
				<div className={style['form-item']}>
					<CustomLabel label="email">Email</CustomLabel>
					<CustomInput formik={formik} label="email" type="email" />
					{formik.touched.email && formik.errors.email && (
							<div className={style.error}>{formik.errors.email}</div>)
					}
				</div>
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
					<div className={style.error}>{formik.errors.gender}</div>
				)}
			</form>
		</>
	)
}

export default PersonalInfoForm;