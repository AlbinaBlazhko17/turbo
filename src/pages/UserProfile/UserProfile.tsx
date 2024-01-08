import { Button, CustomInput, CustomLabel, ModalWindow } from '@/components';
import { RootState } from '@/customTypes/store.types';
import { IPassword } from '@/interfaces/IDataForPassword';
import { changePassword, changeUsername, changeEmail } from '@/store/actions/actions';
import bg from '@assets/img/BG.png';
import ProfileIcon from '@assets/img/person.png';
import { Formik, FormikProps } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validationSchemaPassword } from './validationSchemaPassword';
import EditIcon from '@assets/icons/edit.svg';
import { validationSchemaInfo } from './validationSchemaInfo';
import { IDataForInfo } from '@/interfaces/IDataForInfo';

import style from './UserProfile.module.scss';

function UserProfile() {
	const initialValuesPassword: IPassword = {
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	};
	const [dataPassword, setDataPassword] = useState<IPassword>(initialValuesPassword);
	const user = useSelector((state: RootState) => state.user);
	const initialValuesInfo: IDataForInfo = {
		username: user.username,
		email: user.email,
	};
	const [dataInfo, setDataInfo] = useState<IDataForInfo>(initialValuesInfo);
	const formikPasswordRef = useRef<FormikProps<IPassword>>(null);
	const formikInfoRef = useRef<FormikProps<IDataForInfo>>(null);
	const [isModalActive, setIsModalActive] = useState<boolean>(false);
	const [isEditing, setIsEditing] = useState<{ username: boolean; email: boolean }>({
		username: false,
		email: false,
	});

	function onClose() {
		setIsModalActive(false);
	}

	const dispatcher = useDispatch();

	function toggleEditing(field: keyof typeof isEditing) {
		setIsEditing((prevState) => ({
			...prevState,
			[field]: !prevState[field],
		}));
	}

	function handleChangeInfo() {
		if (isEditing.username && !isEditing.email) {
			dispatcher(changeUsername({ newUsername: dataInfo.username }));
		} else if (isEditing.email && !isEditing.username) {
			dispatcher(changeEmail({ newEmail: dataInfo.email }));
		} else if (isEditing.username && isEditing.email) {
			dispatcher(changeUsername({ newUsername: dataInfo.username }));
			dispatcher(changeEmail({ newEmail: dataInfo.email }));
		}
	}

	function handleChangePassword() {
		if (dataPassword.currentPassword === dataPassword.newPassword) {
			formikPasswordRef.current?.setErrors({
				newPassword: 'Ensure the new password does not match the previous one.',
			});
		} else if (user.password === dataPassword.currentPassword) {
			dispatcher(changePassword({ newPassword: dataPassword.newPassword }));
			formikPasswordRef.current?.resetForm();
			setIsModalActive(true);
		} else {
			formikPasswordRef.current?.setErrors({ currentPassword: 'Wrong password' });
		}
	}

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
					<Formik
						initialValues={initialValuesInfo}
						validationSchema={validationSchemaInfo}
						onSubmit={(values) => console.log(values)}
						innerRef={formikInfoRef}
					>
						{(formik) => (
							<div className={style.profile__info__wrapper}>
								<div className={style['profile__info-item']}>
									{isEditing.username ? (
										<CustomInput
											setData={setDataInfo}
											formik={formik}
											label="username"
											type="text"
										/>
									) : (
										<h2 className={style.profile__name}>{user.username}</h2>
									)}
									{!isEditing.username ? (
										<div className={style.profile__edit} onClick={() => toggleEditing('username')}>
											<img src={EditIcon} alt="edit" />
										</div>
									) : (
										<Button
											appearance="filled"
											onClick={() => {
												toggleEditing('username');
												handleChangeInfo();
											}}
											className={style.profile__editBtn}
										>
											Save
										</Button>
									)}
								</div>
								<div className={style['profile__info-item']}>
									{isEditing.email ? (
										<CustomInput setData={setDataInfo} formik={formik} label="email" type="text" />
									) : (
										<p className={style.profile__email}>{user.email}</p>
									)}
									{!isEditing.email ? (
										<div
											className={style.profile__edit}
											onClick={() => {
												toggleEditing('email');
											}}
										>
											<img src={EditIcon} alt="edit" />
										</div>
									) : (
										<Button
											appearance="filled"
											onClick={() => {
												toggleEditing('email');
												handleChangeInfo();
											}}
											className={style.profile__editBtn}
										>
											Save
										</Button>
									)}
								</div>
							</div>
						)}
					</Formik>
				</div>
			</section>

			<section className={style.profile__form}>
				<Formik
					initialValues={initialValuesPassword}
					validationSchema={validationSchemaPassword}
					onSubmit={handleChangePassword}
					innerRef={formikPasswordRef}
				>
					{(formik) => (
						<div>
							<div className={style['profile__form-item']}>
								<CustomLabel>Current password</CustomLabel>
								<CustomInput
									setData={setDataPassword}
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
								<CustomInput
									setData={setDataPassword}
									formik={formik}
									label="newPassword"
									type="password"
								/>
								{formik.touched.newPassword && formik.errors.newPassword && (
									<div className={style[`profile__form-item__error`]}>
										{formik.errors.newPassword}
									</div>
								)}
							</div>
							<div className={style['profile__form-item']}>
								<CustomLabel>Confirm password</CustomLabel>
								<CustomInput
									setData={setDataPassword}
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
