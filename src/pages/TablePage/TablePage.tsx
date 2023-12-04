import { Button, ModalWindow, Filtration } from '@/components';
import { EFormProps } from '@/customTypes/form.types';
import { RootState } from '@/customTypes/store.types';
import { IDataForForm } from '@/interfaces/IDataForForms';
import ISelectedItem from '@/interfaces/ISelectedItem';
import { filterByProp, returnDataAfterFiltering, sortByProp, sortByPropDesc } from '@/store/actions/actions';
import { ThemeContext } from '@/theme/theme';
import FiltrationIcon from '@assets/icons/filtration.svg';
import SortArrow from '@assets/icons/sort-arrow.svg';
import cn from 'classnames';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './tablePage.module.scss';

function TablePage() {
	const { theme } = useContext(ThemeContext);
	const dataFromForms = useSelector((state: RootState) => state.form.formData);
	const [data, setData] = useState<IDataForForm[]>(dataFromForms);
	const [sliceStep, setSliceStep] = useState<number>(10);
	const [order, setOrder] = useState<boolean>(true);
	const [sortedColumn, setSortedColumn] = useState<string | null>(null);
	const selectedItemInitialState = {
		interests: [],
		gender: '',
		range: [0, 100] as [number, number],
	};
	const [selectedItem, setSelectedItem] = useState<ISelectedItem>(selectedItemInitialState);
	const [isModalActive, setModalActive] = useState(false);
	const [sliderRange, setSliderRange] = useState<number[]>([0, 100]);
	const [isSliderInteracting, setIsSliderInteracting] = useState(false);
	const dispatcher = useDispatch();

	const handleModalOpen = () => {
		setModalActive(true);
	};
	const handleModalClose = () => {
		setModalActive(false);
	};

	useEffect(() => {
		dispatcher(sortByProp(EFormProps.date));
	}, []);

	useEffect(() => {
		setData(dataFromForms.filter((item) => item.terms !== false));
	}, [dataFromForms]);

	function handlePrev() {
		setSliceStep(sliceStep - 10);
	}

	function handleNext() {
		if (data.length > sliceStep) {
			setSliceStep(sliceStep + 10);
		}
	}

	function handleSort(type: string) {
		setOrder(!order);
		setSortedColumn(type);

		if (order === true) {
			dispatcher(sortByPropDesc(type as keyof IDataForForm));
		} else {
			dispatcher(sortByProp(type as keyof IDataForForm));
		}
	}

	function handleReset() {
		dispatcher(returnDataAfterFiltering());
		setOrder(true);
		setSortedColumn(null);
		setSelectedItem(selectedItemInitialState);
		setModalActive(false);
	}

	useEffect(() => {
		dispatcher(filterByProp(selectedItem));
	}, [selectedItem]);

	return (
		<div className={cn(style.table, style[`${theme}`])}>
			<h1>Table Page</h1>
			<section className={style.table__wrapper}>
				<h2 className={style.table__subheader}>Users</h2>
				<div className={style.table__filtration}>
					<div className={style[`table__filtration-filter`]} onClick={handleModalOpen}>
						<img src={FiltrationIcon} alt="filtration" />
					</div>
					<ModalWindow
						title="Filters"
						onClose={handleModalClose}
						isSliderInteracting={isSliderInteracting}
						setIsSliderInteracting={setIsSliderInteracting}
						isModalActive={isModalActive}
					>
						<Filtration
							selectedItem={selectedItem}
							setSelectedItem={setSelectedItem}
							handleReset={handleReset}
							sliderRange={sliderRange}
							setSliderRange={setSliderRange}
							setModalActive={setModalActive}
							setIsSliderInteracting={setIsSliderInteracting}
						/>
					</ModalWindow>
				</div>
				<div className={style.table__overflow}>
					<table>
						<tr>
							<th className={style.table__header}>ID</th>
							<th
								className={cn(style.table__header, style.table__header_sortable)}
								onClick={() => handleSort(EFormProps.firstName)}
							>
								<div className={style.table__sorting}>
									First name
									<span
										className={cn(style.table__sorting__arrow, {
											[style.table__sorting__arrow_up]:
												sortedColumn === EFormProps.firstName && order === true,
											[style.table__sorting__arrow_down]:
												sortedColumn === EFormProps.firstName && order === false,
										})}
									>
										<img src={SortArrow} alt="sort arrow" />
									</span>
								</div>
							</th>
							<th className={style.table__header}>Last name</th>
							<th className={style.table__header}>Email</th>
							<th className={style.table__header}>Gender</th>
							<th className={style.table__header}>Address</th>
							<th className={style.table__header}>Country</th>
							<th className={style.table__header}>Postal code</th>
							<th className={style.table__header}>Interests</th>
							<th className={style.table__header}>Language</th>
							<th
								className={cn(style.table__header, style.table__header_sortable)}
								onClick={() => handleSort(EFormProps.notificationFrequency)}
							>
								<div className={style.table__sorting}>
									Notification frequency
									<span
										className={cn(style.table__sorting__arrow, {
											[style.table__sorting__arrow_up]:
												sortedColumn === EFormProps.notificationFrequency && order === false,
											[style.table__sorting__arrow_down]:
												sortedColumn === EFormProps.notificationFrequency && order === true,
										})}
									>
										<img src={SortArrow} alt="sort arrow" />
									</span>
								</div>
							</th>
							<th className={style.table__header}>Comments</th>
							<th className={style.table__header}>Image</th>
							<th
								className={cn(style.table__header, style.table__header_sortable)}
								onClick={() => handleSort(EFormProps.date)}
							>
								<div className={style.table__sorting}>
									Date
									<span
										className={cn(style.table__sorting__arrow, {
											[style.table__sorting__arrow_up]:
												sortedColumn === EFormProps.date && order === false,
											[style.table__sorting__arrow_down]:
												sortedColumn === EFormProps.date && order === true,
										})}
									>
										<img src={SortArrow} alt="sort arrow" />
									</span>
								</div>
							</th>
						</tr>
						{data.length !== 0 ? (
							data.slice(sliceStep - 10, sliceStep).map((item, index) => (
								<tr key={index}>
									<td className={cn(style.table__descr, style.table__descr_center)}>{item.id}</td>
									<td className={style.table__descr}>{item.firstName}</td>
									<td className={style.table__descr}>{item.lastName}</td>
									<td className={cn(style.table__descr, style.table__descr_nowrap)}>{item.email}</td>
									<td className={cn(style.table__descr, style.table__descr_center)}>{item.gender}</td>
									<td className={cn(style.table__descr, style.table__descr_nowrap)}>{item.city}</td>
									<td className={style.table__descr}>{item.country.label}</td>
									<td className={cn(style.table__descr, style.table__descr_center)}>
										{item.zipCode}
									</td>
									<td className={style.table__descr}>
										{item.interests.map((interest, i) => (
											<div key={i}>{interest}</div>
										))}
									</td>
									<td className={style.table__descr}>{item.language.label}</td>
									<td className={cn(style.table__descr, style.table__descr_center)}>
										{item.notificationFrequency}
									</td>
									<td className={style.table__descr}>{item.comments}</td>
									<td className={style.table__descr}>{item.profilePicture}</td>
									<td className={style.table__descr}>{item.date.toLocaleString()}</td>
								</tr>
							))
						) : (
							<tr>
								<td className={style.table__descr} colSpan={14}>
									<h3 style={{ textAlign: 'center' }}> No info! Please, fill the form</h3>
								</td>
							</tr>
						)}
					</table>
				</div>
				{data.length > 10 ? (
					<div className={style.table__pagination}>
						<Button appearance={sliceStep === 10 ? 'outlined' : 'filled'} onClick={handlePrev}>
							Prev
						</Button>
						<Button appearance={data.length - 1 < sliceStep ? 'outlined' : 'filled'} onClick={handleNext}>
							Next
						</Button>
					</div>
				) : null}
			</section>
		</div>
	);
}

export default TablePage;
