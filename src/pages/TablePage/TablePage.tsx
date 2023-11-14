import { RootState } from "@/store/types";
import { useSelector } from "react-redux";
import { ThemeContext } from "@/theme/theme";
import { useContext } from "react";
import cn from 'classnames';

import style from './tablePage.module.scss';

function TablePage() {
	const dataFromForms = useSelector((state: RootState) => state.form);
	const { theme } = useContext(ThemeContext);

	return (
		<div className={cn(style.table, style[`${theme}`])}>
			<h1>Table Page</h1>
			<section className={style.table__wrapper}>
				<h2>Table</h2>
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
					{dataFromForms.length !== 0 ? dataFromForms.slice(0, dataFromForms.length - 1).map((item, index) => (
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
					)) : <h3> No info! Please, fill the form</h3>}
				</table>
			</section>
		</div>
	)
}

export default TablePage;