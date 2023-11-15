import { RootState } from "@/store/types";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "@/theme/theme";
import { useContext, useEffect, useState } from "react";
import Select from 'react-select';
import cn from 'classnames';
import { sortByProp } from "@/store/actions";

import style from './tablePage.module.scss';

function TablePage() {
	const dataFromForms = useSelector((state: RootState) => state.form);
	const [selectedFilter, setSelectedFilter] = useState<{ value: string, label: string }>();
	const [selectedSort, setSelectedSort] = useState<{ value: string, label: string }>();
	const dispatcher = useDispatch();

	useEffect(() => {
		switch (selectedSort?.value) {
			case 'firstName':
				dispatcher(sortByProp('firstName'));
				break;
			case 'NotificationRange':
				dispatcher(sortByProp('notificationFrequency'));
				break;
			case 'Country':
				dispatcher(sortByProp('country'));
				break;
			default:
				break;
		}
	}, [selectedSort])

	const filterOptions = [
		{ value: 'Male', label: 'Gender: Male' },
		{ value: 'Female', label: 'Gender: Female' },
		{ value: 'Reading', label: 'Interests: Reading' },
		{ value: 'Travel', label: 'Interests: Travel' },
		{ value: 'Sports', label: 'Interests: Sports' },
		{ value: 'Music', label: 'Interests: Music' },
		{ value: 'Gaming', label: 'Interests: Gaming' },
	];

	const sortingOptions = [
		{ value: 'firstName', label: 'First name' },
		{ value: 'NotificationRange', label: 'Notification range' },
		{ value: 'Country', label: 'Country name' },
	]
	const { theme } = useContext(ThemeContext);

	return (
		<div className={cn(style.table, style[`${theme}`])}>
			<h1>Table Page</h1>
			<section className={style.table__wrapper}>
				<h2>Table</h2>
				<div className={style.table__filtration}>
					<div className={style[`table__filtration-item`]}>
						<h3>Filter by: </h3>
						<Select
							options={filterOptions}
							value={selectedFilter}
							onChange={(selectedOption) => setSelectedFilter(selectedOption!)}
						/>
					</div>
					<div className={style[`table__filtration-item`]}>
						<h3>Sort by: </h3>
						<Select
							options={sortingOptions}
							value={selectedSort}
							onChange={(selectedOption) => setSelectedSort(selectedOption!)}
						/>
					</div>
				</div>
				<table>
					<tr>
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
					{dataFromForms.length !== 0 && dataFromForms[0].firstName !== '' ? dataFromForms.map((item, index) => (
						item.terms != false && (
							<tr key={index}>
								<td className={style.table__descr}>{item.firstName}</td>
								<td className={style.table__descr}>{item.lastName}</td>
								<td className={cn(style.table__descr, style.table__descr_nowrap)}>{item.email}</td>
								<td className={cn(style.table__descr, style.table__descr_center)}>{item.gender}</td>
								<td className={style.table__descr}>{item.city}</td>
								<td className={style.table__descr}>{item.country.label}</td>
								<td className={cn(style.table__descr, style.table__descr_center)}>{item.zipCode}</td>
								<td className={style.table__descr}>{item.interests.map((interest, i) => (<li key={i}>{interest}</li>))}</td>
								<td className={style.table__descr}>{item.language.label}</td>
								<td className={cn(style.table__descr, style.table__descr_center)}>{item.notificationFrequency}</td>
								<td className={style.table__descr}>{item.comments}</td>
								<td className={style.table__descr}>{item.profilePicture}</td>
							</tr>
						)
					)) : (
						<tr>
							<td className={style.table__descr} colSpan={12}>
								<h3 style={{ textAlign: 'center' }}> No info! Please, fill the form</h3>
							</td>
						</tr>
					)}
				</table>
			</section>
		</div>
	)
}

export default TablePage;