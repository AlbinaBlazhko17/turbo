import * as Yup from 'yup';

export const validationSchemaInfo = Yup.object().shape({
	username: Yup.string()
		.min(6, 'Username is too short!')
		.max(15, 'Username is too long!')
		.required('Username is required!'),
	email: Yup.string().email('Invalid email address').required('Email is required'),
});
