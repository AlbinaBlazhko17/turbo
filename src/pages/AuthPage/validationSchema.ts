import * as Yup from 'yup';

export const validationSchemaAuth = Yup.object().shape({
	username: Yup.string().when('showFields', ([showFields]) => {
		return showFields
			? Yup.string()
					.min(6, 'Username is too short!')
					.max(15, 'Username is too long!')
					.required('Username is required')
			: Yup.string().notRequired();
	}),
	password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
	showFields: Yup.boolean(),
	checkPassword: Yup.string().when('showFields', ([showFields]) => {
		return showFields
			? Yup.string()
					.oneOf([Yup.ref('password'), undefined], 'Passwords must match')
					.required('Password is required')
			: Yup.string().notRequired();
	}),
	email: Yup.string().email('Invalid email address').required('Email is required'),
	terms: Yup.boolean().when('showFields', ([showFields]) => {
		return showFields ? Yup.bool().oneOf([true], 'You must agree') : Yup.bool().notRequired();
	}),
});
