import { FormikProps } from 'formik';
import CustomLabel from '@/components/CustomLabel/CustomLabel';
import CustomInput from '@/components/CustomInput/CustomInput';
import cn from 'classnames';
import CustomRadioInput from '@/components/CustomRadioInput/CustomRadioInput';
import { IDataForForm } from '@interfaces/IDataForForms';
import { EFormProps } from '@/customTypes/form.types';

import style from '../customForm.module.scss';

function PersonalInfoForm({ formik, setData }: { formik: FormikProps<IDataForForm>, setData: React.Dispatch<React.SetStateAction<IDataForForm>> }) {
	return (
		<>
			<h2>Personal Information</h2>
			<form className={style.form} onSubmit={formik.handleSubmit}>
				<div className={style['form-item']}>
					<CustomLabel label={EFormProps.firstName}>First name</CustomLabel>
					<CustomInput formik={formik} label={EFormProps.firstName} type="text" setData={setData} />
					{EFormProps.firstName in formik.touched && EFormProps.firstName in formik.errors && formik.touched.firstName && formik.errors.firstName && (
						<div className={style[`form-item__error`]}>{formik.errors.firstName}</div>
					)}
				</div>
				<div className={style['form-item']}>
					<CustomLabel label={EFormProps.lastName}>Last name</CustomLabel>
					<CustomInput formik={formik} label={EFormProps.lastName} type="text" setData={setData} />
					{EFormProps.lastName in formik.touched && EFormProps.lastName in formik.errors && formik.touched.lastName && formik.errors.lastName && (
						<div className={style[`form-item__error`]}>{formik.errors.lastName}</div>)
					}
				</div>
				<div className={style['form-item']}>
					<CustomLabel label={EFormProps.email}>Email</CustomLabel>
					<CustomInput formik={formik} label={EFormProps.email} type="email" setData={setData} />
					{EFormProps.email in formik.touched && EFormProps.email in formik.errors && formik.touched.email && formik.errors.email && (
						<div className={style[`form-item__error`]}>{formik.errors.email}</div>)
					}
				</div>
				<div className={style['form-item']}>
					<CustomLabel label={EFormProps.gender}>Gender</CustomLabel>
					<CustomLabel>
						<CustomRadioInput
							name={EFormProps.gender}
							value='male'
							formik={formik}
							setData={setData}
						/>
						Male
					</CustomLabel>
					<CustomLabel>
						<CustomRadioInput
							name={EFormProps.gender}
							value="female"
							formik={formik}
							setData={setData}
						/>
						Female
					</CustomLabel>
					{EFormProps.gender in formik.touched && EFormProps.gender in formik.errors && formik.touched.gender && formik.errors.gender && (
						<div className={cn(style[`form-item__error`], style[`form-item__radio`])}>{formik.errors.gender}</div>
					)}
				</div>
			</form>
		</>
	)
}

export default PersonalInfoForm;