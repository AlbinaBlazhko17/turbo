import { EGender, EInterests } from '@/customTypes/form.types';
import TickIcon from '@assets/icons/tick.svg';
import { Dispatch, SetStateAction } from 'react';
import cn from 'classnames';

import style from './filtration.module.scss';
import Button from '@/components/Button/Button';

function Filtration({
	selectedItem,
	setSelectedItem,
	handleReset,
}: {
	selectedItem: string[];
	setSelectedItem: Dispatch<SetStateAction<string[]>>;
	handleReset: () => void;
}) {
	const itemsGender = [
		{
			label: 'Gender',
			items: [EGender.Male, EGender.Female],
		},
	];

	const itemsInterests = [
		{
			label: 'Interests',
			items: [EInterests.Gaming, EInterests.Music, EInterests.Reading, EInterests.Sports, EInterests.Traveling],
		},
	];

	function handleToggleFilter(item: string, label: string) {
		const newItem = label === 'Gender' ? item.toLocaleLowerCase() : item;
		if (label === 'Gender') {
			setSelectedItem((prevSelectedItem) => {
				if (newItem === EGender.Female.toLocaleLowerCase()) {
					return prevSelectedItem.filter((el) => el !== EGender.Male.toLocaleLowerCase());
				} else {
					return prevSelectedItem.filter((el) => el !== EGender.Female.toLocaleLowerCase());
				}
			});
		}
		//@ts-ignore
		if (selectedItem.includes(newItem)) {
			setSelectedItem((prevSelectedItem) => prevSelectedItem.filter((el) => el !== newItem));
		} else {
			setSelectedItem((prevSelectedItem) => [...prevSelectedItem, newItem]);
		}
	}

	return (
		<div className={style.filtration}>
			<ul>
				{itemsGender.map((group, groupIndex) => (
					<li key={groupIndex}>
						<strong className={style['filtration__label']}>{group.label}</strong>
						<ul>
							{group.items.map((item, itemIndex) => (
								<li
									onClick={() => handleToggleFilter(item, group.label)}
									key={`${groupIndex}-${itemIndex}`}
									//@ts-ignore
									className={
										group.label !== 'Interests'
											? style['filtration-item']
											: [style['filtration__interests-item']]
									}
								>
									{item}
									<span
										className={cn(style.tick, {
											//@ts-ignore
											[style.tick_active]: selectedItem.includes(
												group.label === 'Gender' ? item.toLocaleLowerCase() : item,
											),
										})}
									>
										<img src={TickIcon} alt="tick" />
									</span>
								</li>
							))}
						</ul>
					</li>
				))}
				{itemsInterests.map((group, groupIndex) => (
					<li key={groupIndex}>
						<strong className={style['filtration__label']}>{group.label}</strong>
						<ul className={style.filtration__interests}>
							{group.items.map((item, itemIndex) => (
								<li
									onClick={() => handleToggleFilter(item, group.label)}
									key={`${groupIndex}-${itemIndex}`}
									//@ts-ignore
									className={cn(style['filtration__interests-item'], {
										//@ts-ignore
										[style['filtration__interests-item_active']]: selectedItem.includes(item),
									})}
								>
									{item}
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
			<div className={style[`filtration__reset`]}>
				<Button appearance="filled" onClick={handleReset}>
					Remove all filters
				</Button>
			</div>
		</div>
	);
}

export default Filtration;
