import CustomCheckbox from '@/components/CustomCheckbox/CustomCheckbox';
import CustomLabel from '@/components/CustomLabel/CustomLabel';
import { IDataForSubmitForm } from '@/interfaces/IDataForForms';
import { FormikProps } from 'formik';

import style from '../customForm.module.scss';

function FinalForm({ formik }: { formik: FormikProps<IDataForSubmitForm> }) {
	return (
		<form className={style.form}>
			<h2>Finalize & Submit</h2>
			<div className={style['form-item']}>
				<CustomLabel label='comments'>Additional comments</CustomLabel>
			</div>
			<div className={style['form-item']}>
				<CustomLabel label='comments'>Upload profile picture</CustomLabel>
			</div>
			<div className={style['form-item']}>
				<CustomLabel label='comments'>Terms & conditions</CustomLabel>
				<CustomLabel label="terms">
					<CustomCheckbox formik={formik} label="terms" />
					I accept the terms and conditions
				</CustomLabel>
			</div>
		</form>
	)
}

export default FinalForm;