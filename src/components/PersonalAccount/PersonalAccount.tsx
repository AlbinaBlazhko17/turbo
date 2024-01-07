import { EFormProps, EInterests } from '@/customTypes/form.types';
import { RootState } from '@/customTypes/store.types';
import { IDataForForm } from '@/interfaces/IDataForForms';
import { getPhotoByUserId } from '@/utils/dataForGallery';
import EditIcon from '@assets/icons/edit.svg';
import SpinnerIcon from '@assets/icons/spinner.svg';
import NotFoundImg from '@assets/img/icon-image-not-found-free-vector.jpg';
import cn from 'classnames';
import { Formik, FormikProps } from 'formik';
import { Suspense, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Await, useLoaderData, useNavigate, useParams } from 'react-router';
import { validationSchemaForPersonalAccount } from '../CustomForm/validationSchemas';
import CustomInput from '../CustomInput/CustomInput';
import CustomLabel from '../CustomLabel/CustomLabel';
import { IDataForPersonalAccount } from '@/customTypes/personalAccount';
import { IRangeSliderRef } from '@/interfaces/IDataForPersonaAccount';
import { changeDataById, deleteUserById } from '@/store/actions/actions';
import TrashIcon from '@assets/icons/trash.svg';
//@ts-ignore
import RangeSlider from 'react-range-slider-input';
import Button from '../Button/Button';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import CustomSelect from '../CustomSelect/CustomSelect';
import ModalWindow from '../ModalWindow/ModalWindow';

import 'react-range-slider-input/dist/style.css';
import style from './personalAccount.module.scss';
import CustomMultiSelect from '../CustomMultiSelect/CustomMultiSelect';

function PersinalAccount() {
	const [profilePicture, setProfilePicture] = useState<string>('');
	const users = useSelector((state: RootState) => state.form.formData);
	const [user, setUser] = useState<IDataForForm>();
	const [changedData, setChangedData] = useState<IDataForForm>(user!);
	const dataForSelect = useLoaderData();
	const formikRef = useRef<FormikProps<IDataForForm> | null>(null);
	const [disabled, setDisabled] = useState<IDataForPersonalAccount>({
		[EFormProps.firstName]: true,
		[EFormProps.lastName]: true,
		[EFormProps.email]: true,
		[EFormProps.city]: true,
		[EFormProps.country]: true,
		[EFormProps.zipCode]: true,
		[EFormProps.interests]: true,
		[EFormProps.buyingFrequency]: true,
		[EFormProps.date]: true,
		[EFormProps.language]: true,
	});
	const [isModalActive, setIsModalActive] = useState(false);
	const { id } = useParams();
	const dispatcher = useDispatch();
	const navigate = useNavigate();

	const rangeSliderRef = useRef<IRangeSliderRef>(null);

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
			const userById = users.find((user: IDataForForm) => user.id === +id);
			setUser(userById);
		}
	}, []);

	useEffect(() => {
		if (
			rangeSliderRef.current &&
			rangeSliderRef.current.element.current &&
			rangeSliderRef.current.thumb[0].current &&
			rangeSliderRef.current.range.current
		) {
			rangeSliderRef.current.element.current.style.margin = '0 auto';
			rangeSliderRef.current.element.current.style.width = '500px';
			rangeSliderRef.current.element.current.style.marginTop = '20px';
			rangeSliderRef.current.element.current.style.background =
				'linear-gradient(90deg, rgba(233, 245, 254, 1) 0%, rgba(33, 150, 243, 1) 76%, rgba(12, 127, 218, 1) 100%)';
			rangeSliderRef.current.thumb[0].current.style.width = '0px';
			rangeSliderRef.current.range.current.style.background = 'transparent';
		}
	}, [rangeSliderRef.current]);

	function handleClickOnEdit(label: keyof IDataForPersonalAccount) {
		setDisabled({ ...disabled, [label]: !disabled[label] });
	}

	function handleSaveData(label: keyof IDataForPersonalAccount) {
		setChangedData((prevData) => ({ ...prevData, [label]: user![label] }));
		dispatcher(changeDataById(changedData));
	}

	function onClose() {
		setIsModalActive(false);
	}

	function handleClickOnTrash() {
		setIsModalActive(true);
	}

	function handleDeleteUser() {
		setIsModalActive(false);
		navigate('/customers');
		dispatcher(deleteUserById(+id!));
	}

	useEffect(() => {
		if (formikRef.current) {
			dispatcher(changeDataById(formikRef.current.values as IDataForForm));
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
			{user ? (
				<div className={style['personal-account__info']}>
					<div className={style['personal-account__trash']} onClick={handleClickOnTrash}>
						<img src={TrashIcon} alt="delete" />
					</div>
					<h2 className={style['personal-account__subheader']}>Personal Information</h2>
					<div className={style['personal-account__form']}>
						<div className={style['personal-account__form-item']}>
							<h3 className={style['personal-account__form-item__title']}>Date of sign up:</h3>
							<div className={style['personal-account__form-item__input']}>
								<p className={style['personal-account__form-item__value']}>{user.date}</p>
							</div>
						</div>
						<div className={style['personal-account__form-item']}>
							<h3 className={style['personal-account__form-item__title']}>First Name:</h3>
							<div className={style['personal-account__form-item__input']}>
								<p className={style['personal-account__form-item__value']}>{user.firstName}</p>
							</div>
						</div>
						<div className={style['personal-account__form-item']}>
							<h3 className={style['personal-account__form-item__title']}>Last Name:</h3>
							<div className={style['personal-account__form-item__input']}>
								<p className={style['personal-account__form-item__value']}>{user.lastName}</p>
							</div>
						</div>
						<div className={style['personal-account__form-item']}>
							<h3 className={style['personal-account__form-item__title']}>Gender:</h3>
							<div className={style['personal-account__form-item__input']}>
								<p className={style['personal-account__form-item__value']}>{user.gender}</p>
							</div>
						</div>
					</div>
				</div>
			) : (
				<h2>Data Not Found!</h2>
			)}
			{user && (
				<Formik
					initialValues={user}
					validationSchema={validationSchemaForPersonalAccount}
					onSubmit={(values) => {
						console.log(values);
					}}
					innerRef={formikRef}
				>
					{(formik) => (
						<>
							<div className={cn(style['personal-account__form'], style['personal-account__contact'])}>
								<h2 className={style['personal-account__subheader']}>Contact Information</h2>
								<div className={style['personal-account__form-item']}>
									<h3 className={style['personal-account__form-item__title']}>Email:</h3>
									<div className={style['personal-account__form-item__input']}>
										<CustomInput
											formik={formik}
											label={EFormProps.email}
											type="text"
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
													className={style['personal-account__form-item__button']}
												>
													Save
												</Button>
											)}
										</div>
									</div>
								</div>
								<div className={style['personal-account__form-item']}>
									<h3 className={style['personal-account__form-item__title']}>Address:</h3>
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
													className={style['personal-account__form-item__button']}
												>
													Save
												</Button>
											)}
										</div>
									</div>
								</div>
								<div className={style['personal-account__form-item']}>
									<h3 className={style['personal-account__form-item__title']}>Zip code:</h3>
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
													className={style['personal-account__form-item__button']}
												>
													Save
												</Button>
											)}
										</div>
									</div>
								</div>
								<div className={style['personal-account__form-item']}>
									<h3 className={style['personal-account__form-item__title']}>Country:</h3>
									<div className={style['personal-account__form-item__select']}>
										<Suspense fallback={<div>Loading...</div>}>
											<Await resolve={dataForSelect}>
												{(loaderData) => (
													<CustomSelect
														data={loaderData.countries}
														formik={formik}
														type={EFormProps.country}
													/>
												)}
											</Await>
										</Suspense>
									</div>
								</div>
								<div className={style['personal-account__form-item']}>
									<h3 className={style['personal-account__form-item__title']}>Language:</h3>
									<div className={style['personal-account__form-item__select']}>
										<Suspense fallback={<div>Loading...</div>}>
											<Await resolve={dataForSelect}>
												{(loaderData) => (
													<CustomSelect
														data={loaderData.languages}
														formik={formik}
														type={EFormProps.language}
													/>
												)}
											</Await>
										</Suspense>
									</div>
								</div>
							</div>
							<div className={cn(style['personal-account__form'], style['personal-account__other'])}>
								<h2 className={style['personal-account__subheader']}>Other Information</h2>
								<div className={style['personal-account__form-item']}>
									<h3 className={style['personal-account__form-item__title']}>Interests:</h3>
									<div className={style['personal-account__form-item__checkbox']}>
										<CustomLabel label={EInterests.Reading}>
											<div className={style['personal-account__form-item__checkbox__wrapper']}>
												<CustomCheckbox
													formik={formik}
													label={EInterests.Reading}
													setData={setChangedData}
												/>
											</div>
											Reading
										</CustomLabel>

										<CustomLabel label={EInterests.Music}>
											<CustomCheckbox
												formik={formik}
												label={EInterests.Music}
												setData={setChangedData}
											/>
											Music
										</CustomLabel>

										<CustomLabel label={EInterests.Sports}>
											<CustomCheckbox
												formik={formik}
												label={EInterests.Sports}
												setData={setChangedData}
											/>
											Sports
										</CustomLabel>

										<CustomLabel label={EInterests.Gaming}>
											<CustomCheckbox
												formik={formik}
												label={EInterests.Gaming}
												setData={setChangedData}
											/>
											Gaming
										</CustomLabel>

										<CustomLabel label={EInterests.Traveling}>
											<CustomCheckbox
												formik={formik}
												label={EInterests.Traveling}
												setData={setChangedData}
											/>
											Traveling
										</CustomLabel>
									</div>
									<div className={style['personal-account__form-item']}>
										<h3
											className={cn(
												style['personal-account__form-item__title'],
												style['personal-account__form-item__title_center'],
											)}
										>
											{' '}
											Buying frequency:
										</h3>
										<div
											className={cn(
												style['personal-account__form-item__input'],
												style['personal-account__form-item__range'],
											)}
										>
											<RangeSlider
												defaultValue={[
													0,
													(EFormProps.buyingFrequency in formik.values &&
														+formik.values.buyingFrequency) ||
														100,
												]}
												ref={rangeSliderRef}
												min={0}
												max={100}
												step={1}
												thumbsDisabled={[true, false]}
												rangeSlideDisabled={true}
												onInput={(e: Array<number>) => {
													formik.setFieldValue(EFormProps.buyingFrequency, e[1]);
													setChangedData(formik.values);
												}}
											/>
										</div>

										<div className={style['personal-account__form-item']}>
											<h3 className={style['personal-account__form-item__title']}>Products:</h3>
											<div className={style['personal-account__form-item__input']}>
												<CustomMultiSelect formik={formik} name={EFormProps.products} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</>
					)}
				</Formik>
			)}
			<ModalWindow title="Delete User?" onClose={onClose} isModalActive={isModalActive}>
				<div className={style['personal-account__modal']}>
					<Button appearance="filled" onClick={onClose}>
						No
					</Button>
					<Button
						appearance="outlined"
						onClick={handleDeleteUser}
						className={style['personal-account__modal__button']}
					>
						Yes
					</Button>
				</div>
			</ModalWindow>
		</div>
	);
}

export default PersinalAccount;
