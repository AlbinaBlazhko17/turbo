import * as Yup from 'yup';

export const validationSchemaPassword = Yup.object().shape({
	currentPassword: Yup.string().required('Current password is required'),
	newPassword: Yup.string().required('New password is required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('newPassword'), undefined], 'Passwords must match')
		.required('Password is required'),
});
