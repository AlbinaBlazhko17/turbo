import { FormikProps } from 'formik';
import CustomLabel from '@/components/CustomLabel/CustomLabel';
import CustomInput from '@/components/CustomInput/CustomInput';
import cn from 'classnames';
import CustomRadioInput from '@/components/CustomRadioInput/CustomRadioInput';
import { IDataForForm } from '@interfaces/IDataForForms';

import style from '../customForm.module.scss';

function PersonalInfoForm({ formik }: { formik: FormikProps<IDataForForm> }) {
	return (
		<>
			<h2>Personal Information</h2>
			<form className={style.form} onSubmit={formik.handleSubmit}>
				<div className={style['form-item']}>
					<CustomLabel label="firstName">First name</CustomLabel>
					<CustomInput formik={formik} label="firstName" type="text" />
					{'firstName' in formik.touched && 'firstName' in formik.errors && formik.touched.firstName && formik.errors.firstName && (
						<div className={style[`form-item__error`]}>{formik.errors.firstName}</div>
					)}
				</div>
				<div className={style['form-item']}>
					<CustomLabel label="lastName">Last name</CustomLabel>
					<CustomInput formik={formik} label="lastName" type="text" />
					{'lastName' in formik.touched && 'lastName' in formik.errors && formik.touched.lastName && formik.errors.lastName && (
						<div className={style[`form-item__error`]}>{formik.errors.lastName}</div>)
					}
				</div>
				<div className={style['form-item']}>
					<CustomLabel label="email">Email</CustomLabel>
					<CustomInput formik={formik} label="email" type="email" />
					{'email' in formik.touched && 'email' in formik.errors && formik.touched.email && formik.errors.email && (
						<div className={style[`form-item__error`]}>{formik.errors.email}</div>)
					}
				</div>
				<div className={style['form-item']}>
					<CustomLabel label='gender'>Gender</CustomLabel>
					<CustomLabel>
						<CustomRadioInput
							name="gender"
							value="male"
							formik={formik}
						/>
						Male
					</CustomLabel>
					<CustomLabel>
						<CustomRadioInput
							name="gender"
							value="female"
							formik={formik}
						/>
						Female
					</CustomLabel>
					{'gender' in formik.touched && 'gender' in formik.errors && formik.touched.gender && formik.errors.gender && (
						<div className={cn(style[`form-item__error`], style[`form-item__radio`])}>{formik.errors.gender}</div>
					)}
				</div>
			</form>
		</>
	)
}

export default PersonalInfoForm;