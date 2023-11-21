import { RootState } from "@/customTypes/store.types";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "@/theme/theme";
import { useContext, useEffect, useState } from "react";
import Select from 'react-select';
import cn from 'classnames';
import { sortByProp, filterByInterest, filterByGender, returnDataAfterFiltering, sortByPropDesc } from "@/store/actions/actions";
import { IDataForForm } from "@/interfaces/IDataForForms";
import Button from "@/components/Button/Button";
import { EFormProps, EGender, EInterests } from "@/customTypes/form.types";

import style from './tablePage.module.scss';

function TablePage() {
	const { theme } = useContext(ThemeContext);
	const dataFromForms = useSelector((state: RootState) => state.form.formData);
	const [data, setData] = useState<IDataForForm[]>(dataFromForms);
	const [sliceStep, setSliceStep] = useState<number>(10);

	const filterOptions = [
		{ value: 'none', label: 'None' },
		{
			label: 'Gender',
			options: [
				{ value: EGender.Male, label: EGender.Male },
				{ value: EGender.Female, label: EGender.Female },
			],
		},
		{
			label: 'Interests',
			options: [
				{ value: EInterests.Reading, label: EInterests.Reading },
				{ value: EInterests.Traveling, label: EInterests.Traveling },
				{ value: EInterests.Sports, label: EInterests.Sports },
				{ value: EInterests.Music, label: EInterests.Music },
				{ value: EInterests.Gaming, label: EInterests.Gaming },
			]
		}
	]

	const sortingOptions = [
		{ value: 'id', label: 'Id' },
		{ value: EFormProps.firstName, label: 'First name' },
		{ value: EFormProps.notificationFrequency, label: 'Notification frequency' },
	]

	const [selectedFilter, setSelectedFilter] = useState<{ value: string, label: string }>(filterOptions[0] as { value: string, label: string });
	const [selectedSort, setSelectedSort] = useState<{ value: string, label: string }>(sortingOptions[0]);
	const dispatcher = useDispatch();

	useEffect(() => {
		switch (selectedFilter?.value) {
			case 'none':
				dispatcher(returnDataAfterFiltering())
				break;
			case EGender.Male:
				dispatcher(filterByGender('male'))
				break;
			case EGender.Female:
				dispatcher(filterByGender('female'))
				break;
			case EInterests.Reading:
				dispatcher(filterByInterest(EInterests.Reading))
				break;
			case EInterests.Traveling:
				dispatcher(filterByInterest(EInterests.Traveling))
				break;
			case EInterests.Sports:
				dispatcher(filterByInterest(EInterests.Sports))
				break;
			case EInterests.Music:
				dispatcher(filterByInterest(EInterests.Music))
				break;
			case EInterests.Gaming:
				dispatcher(filterByInterest(EInterests.Gaming))
				break;
		}
	}, [selectedFilter, selectedSort])

	useEffect(() => {
		switch (selectedSort?.value) {
			case 'id':
				dispatcher(sortByProp('id'));
				break;
			case EFormProps.firstName:
				dispatcher(sortByProp(EFormProps.firstName));
				break;
			case EFormProps.notificationFrequency:
				dispatcher(sortByPropDesc(EFormProps.notificationFrequency));
				break;
			default:
				break;
		}
	}, [selectedSort, selectedFilter])

	useEffect(() => {
		setData(dataFromForms.filter((item) => item.terms !== false))
	}, [dataFromForms]);

	useEffect(() => {

	}, [selectedFilter])

	function handlePrev() {
		setSliceStep(sliceStep - 10);
	}

	function handleNext() {
		if (data.length > sliceStep) {
			setSliceStep(sliceStep + 10);
		}
	}
	return (
		<div className={cn(style.table, style[`${theme}`])}>
			<h1>Table Page</h1>
			<section className={style.table__wrapper}>
				<h2>Table</h2>
				<div className={style.table__filtration}>
					<div className={style[`table__filtration-item`]}>
						<h3>Filter by: </h3>
						<Select
							isSearchable={false}
							options={filterOptions}
							value={selectedFilter}
							onChange={(selectedOption) => setSelectedFilter(selectedOption!)}
						/>
					</div>
					<div className={style[`table__filtration-item`]}>
						<h3>Sort by: </h3>
						<Select
							isSearchable={false}
							options={sortingOptions}
							value={selectedSort}
							onChange={(selectedOption) => setSelectedSort(selectedOption!)}
						/>
					</div>
				</div>
				<table>
					<tr>
						<th className={style.table__header}>ID</th>
						<th className={style.table__header}>First name</th>
						<th className={style.table__header}>Last name</th>
						<th className={style.table__header}>Email</th>
						<th className={style.table__header}>Gender</th>
						<th className={style.table__header}>Address</th>
						<th className={style.table__header}>Country</th>
						<th className={style.table__header}>Postal code</th>
						<th className={style.table__header}>Interests</th>
						<th className={style.table__header}>Language</th>
						<th className={style.table__header}>Notification frequency</th>
						<th className={style.table__header}>Comments</th>
						<th className={style.table__header}>Image</th>
					</tr>
					{data.length !== 0 ? data.slice(sliceStep - 10, sliceStep).map((item, index) => (
						<tr key={index}>
							<td className={cn(style.table__descr, style.table__descr_center)}>{item.id}</td>
							<td className={style.table__descr}>{item.firstName}</td>
							<td className={style.table__descr}>{item.lastName}</td>
							<td className={cn(style.table__descr, style.table__descr_nowrap)}>{item.email}</td>
							<td className={cn(style.table__descr, style.table__descr_center)}>{item.gender}</td>
							<td className={cn(style.table__descr, style.table__descr_nowrap)}>{item.city}</td>
							<td className={style.table__descr}>{item.country.label}</td>
							<td className={cn(style.table__descr, style.table__descr_center)}>{item.zipCode}</td>
							<td className={style.table__descr}>{item.interests.map((interest, i) => (<li key={i}>{interest}</li>))}</td>
							<td className={style.table__descr}>{item.language.label}</td>
							<td className={cn(style.table__descr, style.table__descr_center)}>{item.notificationFrequency}</td>
							<td className={style.table__descr}>{item.comments}</td>
							<td className={style.table__descr}>{item.profilePicture}</td>
						</tr>
					)) : (
						<tr>
							<td className={style.table__descr} colSpan={13}>
								<h3 style={{ textAlign: 'center' }}> No info! Please, fill the form</h3>
							</td>
						</tr>
					)
					}
				</table>
				{
					data.length > 10 ? (
						<div className={style.table__pagination}>
							<Button appearance={sliceStep === 10 ? 'outlined' : 'filled'} onClick={handlePrev}>Prev</Button>
							<Button appearance={data.length - 1 < sliceStep ? 'outlined' : 'filled'} onClick={handleNext}>Next</Button>
						</div>
					) : null
				}
			</section>
		</div>
	)
}

export default TablePage;