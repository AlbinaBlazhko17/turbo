import { EGender, EInterests } from '@/customTypes/form.types';
import TickIcon from '@assets/icons/tick.svg';
import cn from 'classnames';
import { Dispatch, SetStateAction } from 'react';

import style from './DropDownMenu.module.scss';


function DropDownMenu({ selectedItem, setSelectedItem, toggleDropdown }: { selectedItem: string[], setSelectedItem: Dispatch<SetStateAction<string[]>>, toggleDropdown: () => void }) {

	const items = [
		{
			label: 'Gender',
			items: [EGender.Male, EGender.Female],
		},
		{
			label: 'Interests',
			items: [EInterests.Gaming, EInterests.Music, EInterests.Reading, EInterests.Sports, EInterests.Traveling],
		},
	];

	function handleToggleFilter(item: string, label: string) {
		const newItem = label === 'Gender' ? item.toLocaleLowerCase() : item;
		if (label === 'Gender') {
			setSelectedItem(prevSelectedItem => {
				if (newItem === EGender.Female.toLocaleLowerCase()) {
					return prevSelectedItem.filter(el => el !== EGender.Male.toLocaleLowerCase());
				} else {
					return prevSelectedItem.filter(el => el !== EGender.Female.toLocaleLowerCase());
				}
			});
		}
		//@ts-ignore
		if (selectedItem.includes(newItem)) {
			setSelectedItem(prevSelectedItem =>
				prevSelectedItem.filter(el => el !== newItem)
			);
		} else {
			setSelectedItem(prevSelectedItem => [...prevSelectedItem, newItem]);
		}
	}


	return (
		<div className={style['filtration-dropdown']} onClick={toggleDropdown}>
			<ul>
				{items.map((group, groupIndex) => (
					<li key={groupIndex}>
						<strong className={style['filtration-dropdown__label']}>{group.label}</strong>
						<ul>
							{group.items.map((item, itemIndex) => (
								<li
									onClick={() => handleToggleFilter(item, group.label)}
									key={`${groupIndex}-${itemIndex}`}
									//@ts-ignore
									className={style['filtration-dropdown-item']}
								>
									{item}
									<span className={cn(style.tick, {
										//@ts-ignore
										[style.tick_active]: selectedItem.includes(group.label === 'Gender' ? item.toLocaleLowerCase() : item)
									})}><img src={TickIcon} alt="tick" /></span>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}

export default DropDownMenu;

function dispatcher(arg0: { payload: string[]; type: "form/filterByProp"; }) {
	throw new Error('Function not implemented.');
}
