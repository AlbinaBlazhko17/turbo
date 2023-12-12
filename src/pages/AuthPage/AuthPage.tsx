import ArrowIcon from '@/assets/icons/sort-arrow.svg';
import { AuthContext } from '@/auth/auth';
import { Button, CustomCheckbox, CustomInput, CustomLabel } from '@/components';
import { RootState } from '@/customTypes/store.types';
import { IDataForAuth, IUser } from '@/interfaces/IDataForAuth';
import { addUser } from '@/store/actions/actions';
import EllipseIcon from '@assets/icons/ellipse.svg';
import { Formik, FormikProps } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { validationSchemaAuth } from './validationSchema';

import style from './AuthPage.module.scss';

function AuthPage() {
	const formikRef = useRef<FormikProps<IDataForAuth>>(null);
	const location = useLocation();
	const currentPath = location.pathname.slice(1);
	const { toggleAuth } = useContext(AuthContext);
	const user: Omit<IUser, 'checkPassword'> = useSelector((state: RootState) => state.user);
	const [data, setData] = useState<IDataForAuth>({
		username: '',
		email: '',
		password: '',
		checkPassword: '',
		terms: false,
		showFields: currentPath === 'signup',
	});
	const navigate = useNavigate();
	const dispatcher = useDispatch();

	useEffect(() => {
		if (formikRef.current) {
			setData(formikRef.current.values as IDataForAuth);
		}
	}, [formikRef.current?.values]);

	useEffect(() => {
		formikRef.current?.setFieldValue('showFields', currentPath === 'signup');
	}, [currentPath]);

	return (
		<div className={style.auth}>
			<div className={style.auth__ellipse}>
				<div className={style.auth__ellipse__wrapper}>
					<img src={EllipseIcon} alt="ellipse" />

					<div className={style.auth__ellipse__text}>
						<h2>Welcome! </h2>
						<p>To access the dashboard you need to authorize</p>
					</div>
				</div>
			</div>
			<div className={style['auth__ellipse-top']}>
				<img src={EllipseIcon} alt="ellipse" />
			</div>
			<div className={style['auth__ellipse-right']}>
				<img src={EllipseIcon} alt="ellipse" />
			</div>
			<div className={style['auth__ellipse-bottom']}>
				<img src={EllipseIcon} alt="ellipse" />
			</div>
			<h1 className={style.auth__title}>{currentPath === 'login' ? 'Login' : 'Register'}</h1>
			<AnimatePresence>
				<section className={style.auth__wrapper}>
					{currentPath === 'signup' && (
						<motion.div
							className={style.auth__back}
							transition={{
								type: 'spring',
								duration: 0.5,
							}}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<img src={ArrowIcon} alt="back" />
							<Link to="/login">Back to login</Link>
						</motion.div>
					)}

					<Formik
						initialValues={data}
						innerRef={formikRef}
						validationSchema={validationSchemaAuth}
						onSubmit={(values) => {
							if (currentPath === 'signup') {
								if (values.email === user.email) {
									formikRef.current?.setErrors({
										email: 'This email is already registered',
									});
								} else if (values.username === user.username) {
									formikRef.current?.setErrors({
										username: 'This username is already registered',
									});
								} else {
									toggleAuth();
									navigate('/');
									dispatcher(addUser(values));
								}
							} else {
								if (values.email !== user.email) {
									formikRef.current?.setErrors({
										email: 'This email is not registered',
									});
								} else if (values.password !== user.password) {
									formikRef.current?.setErrors({
										password: 'Wrong password',
									});
								} else {
									toggleAuth();
									navigate('/');
								}
							}
						}}
					>
						{(formik) => (
							<div className={style.auth__form}>
								{currentPath === 'signup' && (
									<motion.div
										transition={{
											type: 'spring',
											duration: 0.4,
										}}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className={style['auth__form-item']}
									>
										<CustomLabel label="username" className={style['auth__form-item__label']}>
											Username
										</CustomLabel>
										<CustomInput
											formik={formik}
											label="username"
											type="text"
											setData={setData}
											className={style['auth__form-item__input']}
										/>
										{formik.touched.username && formik.errors.username && (
											<div className={style[`auth__form-item__error`]}>
												{formik.errors.username}
											</div>
										)}
									</motion.div>
								)}
								<div className={style['auth__form-item']}>
									<CustomLabel label="email" className={style['auth__form-item__label']}>
										Email
									</CustomLabel>
									<CustomInput formik={formik} label="email" type="email" setData={setData} />
									{formik.touched.email && formik.errors.email && (
										<div className={style[`auth__form-item__error`]}>{formik.errors.email}</div>
									)}
								</div>
								<div className={style['auth__form-item']}>
									<CustomLabel label="password" className={style['auth__form-item__label']}>
										Password
									</CustomLabel>
									<CustomInput formik={formik} label="password" type="password" setData={setData} />
									{formik.touched.password && formik.errors.password && (
										<div className={style[`auth__form-item__error`]}>{formik.errors.password}</div>
									)}
								</div>
								{currentPath === 'signup' && (
									<>
										<motion.div
											transition={{
												type: 'spring',
												duration: 0.5,
											}}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											className={style['auth__form-item']}
										>
											<CustomLabel
												label="checkPassword"
												className={style['auth__form-item__label']}
											>
												Repeat password
											</CustomLabel>
											<CustomInput
												formik={formik}
												label="checkPassword"
												type="password"
												setData={setData}
											/>
											{formik.touched.checkPassword && formik.errors.checkPassword && (
												<div className={style['auth__form-item__error']}>
													{formik.errors.checkPassword}
												</div>
											)}
										</motion.div>
										<motion.div
											transition={{
												type: 'spring',
												duration: 0.5,
											}}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											className={style['auth__form-item']}
										>
											<CustomLabel label="terms" className={style['auth__form-item__label']}>
												<CustomCheckbox formik={formik} label="terms" setData={setData} />I
												accept the terms and conditions
											</CustomLabel>
											{formik.touched.terms && formik.errors.terms && (
												<div className={style['auth__form-item__error']}>
													{formik.errors.terms}
												</div>
											)}
										</motion.div>
									</>
								)}
								<Button
									appearance="filled"
									type="submit"
									className={style['auth__form-item__button']}
									onClick={formik.handleSubmit}
								>
									{currentPath === 'login' ? 'Login' : 'Register'}
								</Button>
								{currentPath === 'login' && (
									<motion.div
										transition={{
											type: 'spring',
											duration: 0.5,
										}}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className={style.auth__register}
									>
										<p>Don&apos;t have an account?</p>
										<Link to="/signup">Create new account</Link>
									</motion.div>
								)}
							</div>
						)}
					</Formik>
				</section>
			</AnimatePresence>
		</div>
	);
}
export default AuthPage;
