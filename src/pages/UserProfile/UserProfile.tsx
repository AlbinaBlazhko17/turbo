import { Button, CustomInput, CustomLabel, ModalWindow } from '@/components';
import { RootState } from '@/customTypes/store.types';
import { IPassword } from '@/interfaces/IDataForPassword';
import { changePassword } from '@/store/actions/actions';
import bg from '@assets/img/BG.png';
import ProfileIcon from '@assets/img/person.png';
import { Formik, FormikProps } from 'formik';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validationSchemaPassword } from './validationSchemaPassword';

import style from './UserProfile.module.scss';

function UserProfile() {
	const initialValues: IPassword = {
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	};
	const [data, setData] = useState<IPassword>(initialValues);
	const user = useSelector((state: RootState) => state.user);
	const formikRef = useRef<FormikProps<IPassword>>(null);
	const [isModalActive, setIsModalActive] = useState<boolean>(false);

	function onClose() {
		setIsModalActive(false);
	}

	const dispatcher = useDispatch();

	function handleChangePassword() {
		if (data.currentPassword === data.newPassword) {
			formikRef.current?.setErrors({
				newPassword: 'Ensure the new password does not match the previous one.',
			});
		} else if (user.password === data.currentPassword) {
			dispatcher(changePassword({ newPassword: data.newPassword }));
			formikRef.current?.resetForm();
			setIsModalActive(true);
		} else {
			formikRef.current?.setErrors({ currentPassword: 'Wrong password' });
		}
	}

	console.log(formikRef.current);

	return (
		<div className={style.profile}>
			<h1 className={style.profile__header}>User Profile</h1>
			<section className={style.profile__wrapper}>
				<div className={style.profile__bg}>
					<img src={bg} alt="bg" />
				</div>
				<div className={style.profile__info}>
					<div className={style.profile__img}>
						<img src={ProfileIcon} alt="profile" />
					</div>
					<div className={style.profile__info__wrapper}>
						<div className={style['profile__info-item']}>
							<h2 className={style.profile__name}>{user.username}</h2>
						</div>
						<div className={style['profile__info-item']}>
							<p className={style.profile__email}>{user.email}</p>
						</div>
					</div>
				</div>
			</section>

			<section className={style.profile__form}>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchemaPassword}
					onSubmit={handleChangePassword}
					innerRef={formikRef}
				>
					{(formik) => (
						<div>
							<div className={style['profile__form-item']}>
								<CustomLabel>Current password</CustomLabel>
								<CustomInput
									setData={setData}
									formik={formik}
									label="currentPassword"
									type="password"
								/>
								{formik.touched.currentPassword && formik.errors.currentPassword && (
									<div className={style[`profile__form-item__error`]}>
										{formik.errors.currentPassword}
									</div>
								)}
							</div>
							<div className={style['profile__form-item']}>
								<CustomLabel>New password</CustomLabel>
								<CustomInput setData={setData} formik={formik} label="newPassword" type="password" />
								{formik.touched.newPassword && formik.errors.newPassword && (
									<div className={style[`profile__form-item__error`]}>
										{formik.errors.newPassword}
									</div>
								)}
							</div>
							<div className={style['profile__form-item']}>
								<CustomLabel>Confirm password</CustomLabel>
								<CustomInput
									setData={setData}
									formik={formik}
									label="confirmPassword"
									type="password"
								/>
								{formik.touched.confirmPassword && formik.errors.confirmPassword && (
									<div className={style[`profile__form-item__error`]}>
										{formik.errors.confirmPassword}
									</div>
								)}
							</div>
							<div className={style['profile__form__button']}>
								<Button appearance="filled" type="submit" onClick={formik.handleSubmit}>
									Change password
								</Button>
							</div>
						</div>
					)}
				</Formik>
			</section>
			<ModalWindow title="" onClose={onClose} isModalActive={isModalActive} id="password">
				<h2 className={style.profile__modal}> Password successfuly changed</h2>
			</ModalWindow>
		</div>
	);
}

export default UserProfile;
