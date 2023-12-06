import { Suspense, useEffect, useRef, useState } from 'react';
import { Await, useLoaderData, useParams } from 'react-router';
import { getPhotoByUserId } from '@/utils/dataForGallery';
import NotFoundImg from '@assets/img/icon-image-not-found-free-vector.jpg';
import SpinnerIcon from '@assets/icons/spinner.svg';
import { Formik } from 'formik';
import { IDataForForm } from '@/interfaces/IDataForForms';
import { RootState } from '@/customTypes/store.types';
import { useDispatch, useSelector } from 'react-redux';
import { validationSchemaForPersonalAccount } from '../CustomForm/validationSchemas';
import CustomInput from '../CustomInput/CustomInput';
import { EFormProps } from '@/customTypes/form.types';
import CustomLabel from '../CustomLabel/CustomLabel';
import EditIcon from '@assets/icons/edit.svg';

import style from './personalAccount.module.scss';
import Button from '../Button/Button';
import { addItemToForm, changeDataById } from '@/store/actions/actions';
import CustomSelect from '../CustomSelect/CustomSelect';
import CustomForm from '../CustomForm/CustomForm';
import { IFormikRef } from '@/interfaces/IDataForFormik';

type IDataForPersonalAccount = {
	[EFormProps.firstName]: boolean;
	[EFormProps.lastName]: boolean;
	[EFormProps.email]: boolean;
	[EFormProps.city]: boolean;
	[EFormProps.city]: boolean;
	[EFormProps.country]: boolean;
	[EFormProps.zipCode]: boolean;
	[EFormProps.interests]: boolean;
	[EFormProps.notificationFrequency]: boolean;
	[EFormProps.date]: boolean;
};

function PersinalAccount() {
	const [profilePicture, setProfilePicture] = useState<string>('');
	const users = useSelector((state: RootState) => state.form.formData);
	const [user, setUser] = useState<IDataForForm>();
	const [changedData, setChangedData] = useState<IDataForForm>(user!);
	const dataForSelect = useLoaderData();
	const formikRef = useRef<IFormikRef>(null);
	const [disabled, setDisabled] = useState<IDataForPersonalAccount>({
		[EFormProps.firstName]: true,
		[EFormProps.lastName]: true,
		[EFormProps.email]: true,
		[EFormProps.city]: true,
		[EFormProps.country]: true,
		[EFormProps.zipCode]: true,
		[EFormProps.interests]: true,
		[EFormProps.notificationFrequency]: true,
		[EFormProps.date]: true,
	});
	const { id } = useParams();
	const dispatcher = useDispatch();

	useEffect(() => {
		(async () => {
			if (id) {
				const data = await getPhotoByUserId(+id);
				setProfilePicture(data ? data : NotFoundImg);
			} else {
				throw new Error('User id is not defined');
			}
		})();
		if (id) {
			const userById = users.find((user) => user.id === +id);
			setUser(userById);
		}
	}, []);

	function handleClickOnEdit(label: keyof IDataForPersonalAccount) {
		setDisabled({ ...disabled, [label]: !disabled[label] });
	}

	function handleSaveData(label: keyof IDataForPersonalAccount) {
		setChangedData((prevData) => ({ ...prevData, [label]: user![label] }));
		dispatcher(changeDataById(changedData));
	}

	useEffect(() => {
		if (formikRef.current) {
			dispatcher(changeDataById(formikRef.current.values));
		}
	}, [formikRef.current?.values]);

	return (
		<div className={style['personal-account']}>
			<div className={style['personal-account__img']}>
				<img
					src={profilePicture ? profilePicture : SpinnerIcon}
					className={!profilePicture ? style['personal-account__spinner'] : ''}
					alt="profilePicture"
				/>
			</div>
			<div className={style['personal-account__info']}>
				{user ? (
					<Formik
						initialValues={user}
						validationSchema={validationSchemaForPersonalAccount}
						onSubmit={(values) => {
							console.log(values);
						}}
						innerRef={formikRef}
					>
						{(formik) => (
							<div className={style['personal-account__form']}>
								<div className={style['personal-account__form-item']}>
									<CustomLabel label={EFormProps.firstName}>First Name</CustomLabel>
									<div className={style['personal-account__form-item__input']}>
										<CustomInput
											formik={formik}
											label={EFormProps.firstName}
											type="text"
											setData={setChangedData}
											disabled={disabled.firstName}
										/>
										<div
											className={style['personal-account__form-item__edit']}
											onClick={() => handleClickOnEdit(EFormProps.firstName)}
										>
											{disabled.firstName ? (
												<img src={EditIcon} alt="edit" />
											) : (
												<Button
													appearance="filled"
													type="submit"
													onClick={() => handleSaveData(EFormProps.firstName)}
												>
													Save
												</Button>
											)}
										</div>
									</div>
								</div>
								<div className={style['personal-account__form-item']}>
									<CustomLabel label={EFormProps.lastName}>Last Name</CustomLabel>
									<div className={style['personal-account__form-item__input']}>
										<CustomInput
											formik={formik}
											label={EFormProps.lastName}
											type="text"
											setData={setChangedData}
											disabled={disabled.lastName}
										/>
										<div
											className={style['personal-account__form-item__edit']}
											onClick={() => handleClickOnEdit(EFormProps.lastName)}
										>
											{disabled.lastName ? (
												<img src={EditIcon} alt="edit" />
											) : (
												<Button
													appearance="filled"
													type="submit"
													onClick={() => handleSaveData(EFormProps.lastName)}
												>
													Save
												</Button>
											)}
										</div>
									</div>
								</div>
								<div className={style['personal-account__form-item']}>
									<CustomLabel label={EFormProps.email}>Email</CustomLabel>
									<div className={style['personal-account__form-item__input']}>
										<CustomInput
											formik={formik}
											label={EFormProps.email}
											type="email"
											setData={setChangedData}
											disabled={disabled.email}
										/>
										<div
											className={style['personal-account__form-item__edit']}
											onClick={() => handleClickOnEdit(EFormProps.email)}
										>
											{disabled.email ? (
												<img src={EditIcon} alt="edit" />
											) : (
												<Button
													appearance="filled"
													type="submit"
													onClick={() => handleSaveData(EFormProps.email)}
												>
													Save
												</Button>
											)}
										</div>
									</div>
								</div>
								<div className={style['personal-account__form-item']}>
									<CustomLabel label={EFormProps.city}>Address</CustomLabel>
									<div className={style['personal-account__form-item__input']}>
										<CustomInput
											formik={formik}
											label={EFormProps.city}
											type="text"
											setData={setChangedData}
											disabled={disabled.city}
										/>
										<div
											className={style['personal-account__form-item__edit']}
											onClick={() => handleClickOnEdit(EFormProps.city)}
										>
											{disabled.city ? (
												<img src={EditIcon} alt="edit" />
											) : (
												<Button
													appearance="filled"
													type="submit"
													onClick={() => handleSaveData(EFormProps.city)}
												>
													Save
												</Button>
											)}
										</div>
									</div>
								</div>
								<div className={style['personal-account__form-item']}>
									<CustomLabel label={EFormProps.country}>Country</CustomLabel>
									<div className={style['personal-account__form-item__input']}>
										<Suspense fallback={<div>Loading...</div>}>
											<Await resolve={dataForSelect}>
												{(loaderData) => (
													<CustomSelect
														data={loaderData.countries}
														formik={formik}
														type="country"
													/>
												)}
											</Await>
										</Suspense>
										<div
											className={style['personal-account__form-item__edit']}
											onClick={() => handleClickOnEdit(EFormProps.country)}
										>
											{disabled.country ? (
												<img src={EditIcon} alt="edit" />
											) : (
												<Button
													appearance="filled"
													type="submit"
													onClick={() => handleSaveData(EFormProps.country)}
												>
													Save
												</Button>
											)}
										</div>
									</div>
								</div>
								<div className={style['personal-account__form-item']}>
									<CustomLabel label={EFormProps.zipCode}>Zip Code</CustomLabel>
									<div className={style['personal-account__form-item__input']}>
										<CustomInput
											formik={formik}
											label={EFormProps.zipCode}
											type="text"
											setData={setChangedData}
											disabled={disabled.zipCode}
										/>
										<div
											className={style['personal-account__form-item__edit']}
											onClick={() => handleClickOnEdit(EFormProps.zipCode)}
										>
											{disabled.zipCode ? (
												<img src={EditIcon} alt="edit" />
											) : (
												<Button
													appearance="filled"
													type="submit"
													onClick={() => handleSaveData(EFormProps.zipCode)}
												>
													Save
												</Button>
											)}
										</div>
									</div>
								</div>
								<div className={style['personal-account__form-item']}>
									<CustomLabel label={EFormProps.firstName}>Interests</CustomLabel>
									<div className={style['personal-account__form-item__input']}>
										<CustomInput
											formik={formik}
											label={EFormProps.firstName}
											type="text"
											setData={setChangedData}
											disabled={disabled.firstName}
										/>
										<div
											className={style['personal-account__form-item__edit']}
											onClick={() => handleClickOnEdit(EFormProps.firstName)}
										>
											{disabled.firstName ? (
												<img src={EditIcon} alt="edit" />
											) : (
												<Button
													appearance="filled"
													type="submit"
													onClick={() => handleSaveData(EFormProps.firstName)}
												>
													Save
												</Button>
											)}
										</div>
									</div>
								</div>
							</div>
						)}
					</Formik>
				) : (
					<h2>Data Not Found!</h2>
				)}
			</div>
		</div>
	);
}

export default PersinalAccount;
