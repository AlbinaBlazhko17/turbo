import { IDataForAuth } from '@/interfaces/IDataForAuth';
import { Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { IFormikRef } from '@/interfaces/IDataForFormik';
import { Button, CustomCheckbox, CustomInput, CustomLabel } from '@/components';
import { Link } from 'react-router-dom';
import ArrowIcon from '@/assets/icons/sort-arrow.svg';
import { motion } from 'framer-motion';

import style from './AuthPage.module.scss';
import { validationSchemaAuth } from './validationSchema';

function AuthPage() {
	const formikRef = useRef<IFormikRef>(null);
	const location = useLocation();
	const currentPath = location.pathname.slice(1);
	const [data, setData] = useState<IDataForAuth>({
		username: '',
		email: '',
		password: '',
		checkPassword: '',
		terms: false,
		showFields: currentPath === 'signup',
	});

	useEffect(() => {
		if (formikRef.current) {
			setData(formikRef.current.values as IDataForAuth);
		}
	}, [formikRef.current?.values]);

	return (
		<div className={style.auth}>
			<h1 className={style.auth__title}>{currentPath === 'login' ? 'Login' : 'Register'}</h1>
			<section>
				<motion.div className={style.auth__wrapper}>
					{currentPath === 'signup' && (
						<div className={style.auth__back}>
							<img src={ArrowIcon} alt="back" />
							<Link to="/login">Back to login</Link>
						</div>
					)}
					<Formik initialValues={data} innerRef={formikRef} validationSchema={validationSchemaAuth}>
						{(formik) => (
							<div className={style.auth__form}>
								{currentPath === 'signup' && (
									<div className={style['auth__form-item']}>
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
									</div>
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
										<div className={style['auth__form-item']}>
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
												<div className={style[`style['auth__form-item__error`]}>
													{formik.errors.checkPassword}
												</div>
											)}
										</div>
										<div className={style['auth__form-item']}>
											<CustomLabel label="terms" className={style['auth__form-item__label']}>
												<CustomCheckbox formik={formik} label="terms" setData={setData} />I
												accept the terms and conditions
											</CustomLabel>
											{formik.touched.terms && formik.errors.terms && (
												<div className={style[`form-item__error`]}>{formik.errors.terms}</div>
											)}
										</div>
									</>
								)}
								<Button appearance="filled" type="submit" className={style['auth__form-item__button']}>
									{currentPath === 'login' ? 'Login' : 'Register'}
								</Button>
								{currentPath === 'login' && (
									<div className={style.auth__register}>
										<p>Don't have an account?</p>
										<Link to="/signup">Create new account</Link>
									</div>
								)}
							</div>
						)}
					</Formik>
				</motion.div>
			</section>
		</div>
	);
}
export default AuthPage;
