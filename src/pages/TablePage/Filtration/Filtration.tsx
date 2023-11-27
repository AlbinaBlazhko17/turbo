import { EGender, EInterests } from '@/customTypes/form.types';
import TickIcon from '@assets/icons/tick.svg';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import cn from 'classnames';
//@ts-ignore
import RangeSlider from 'react-range-slider-input';
import Button from '@/components/Button/Button';
import { setStateActionType } from '@/customTypes/react.types';

import 'react-range-slider-input/dist/style.css';
import style from './filtration.module.scss';

function Filtration({
	selectedItem,
	setSelectedItem,
	handleReset,
	sliderRange,
	setSliderRange,
}: {
	selectedItem: string[];
	setSelectedItem: setStateActionType<string[]>;
	handleReset: () => void;
	sliderRange: number[];
	setSliderRange: setStateActionType<number[]>;
}) {
	const sliderNumbersRef = useRef(null);
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

	useEffect(() => {
		const rangeSliderChilds = sliderNumbersRef.current.childNodes;
		console.log(rangeSliderChilds[1].style.right);
		rangeSliderChilds[0].style.left = `calc(${sliderRange[0]}% + 20px)`;
		rangeSliderChilds[1].style.left = `calc(${sliderRange[1]}% - 30px)`;
	}, [sliderRange]);

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
			<div className={style.filtration__slider}>
				<strong className={style['filtration__label']}>Notification frequency</strong>
				<RangeSlider
					defaultValue={[
						selectedItem.length === 0 ? 0 : sliderRange[0],
						selectedItem.length === 0 ? 100 : sliderRange[1],
					]}
					min={0}
					max={100}
					step={1}
					thumbsDisabled={[false, false]}
					onInput={(e: Array<number>) => {
						setSliderRange(e);
						console.log('Drag!!!');
					}}
				/>
				<div className={style.filtration__rangeNumbers} ref={sliderNumbersRef}>
					<p className={style.filtration__rangeNumbers_left}>{sliderRange[0]}</p>
					<p className={style.filtration__rangeNumbers_right}>{sliderRange[1]}</p>
				</div>
			</div>
			<div className={style[`filtration__reset`]}>
				<Button appearance="filled" onClick={handleReset}>
					Remove all filters
				</Button>
			</div>
		</div>
	);
}

export default Filtration;
