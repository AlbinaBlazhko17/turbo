import { EGender, EInterests } from '@/customTypes/form.types';
import TickIcon from '@assets/icons/tick.svg';
import { useEffect, useRef } from 'react';
import cn from 'classnames';
//@ts-ignore
import RangeSlider from 'react-range-slider-input';
import Button from '@/components/Button/Button';
import { setStateActionType } from '@/customTypes/react.types';
import ISelectedItem from '@/interfaces/ISelectedItem';

import 'react-range-slider-input/dist/style.css';
import style from './filtration.module.scss';

function Filtration({
	selectedItem,
	setSelectedItem,
	handleReset,
	sliderRange,
	setSliderRange,
	setIsSliderInteracting,
}: {
	selectedItem: ISelectedItem;
	setSelectedItem: setStateActionType<ISelectedItem>;
	handleReset: () => void;
	sliderRange: number[];
	setSliderRange: setStateActionType<number[]>;
	setModalActive: setStateActionType<boolean>;
	setIsSliderInteracting: setStateActionType<boolean>;
}) {
	const sliderNumbersRef = useRef(null);
	const sliderRef = useRef(null);
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
		const sliderThumbLeft = sliderRef.current?.thumb[0].current.style.left;
		const sliderThumbRight = sliderRef.current?.thumb[1].current.style.left;
		const rangeSliderChilds = sliderNumbersRef.current?.childNodes;

		rangeSliderChilds[0].style.left = `calc(${sliderThumbLeft.slice(4, -1)} + -5px)`;
		rangeSliderChilds[1].style.left = `calc(${sliderThumbRight.slice(4, -1)} + -10px)`;
	}, [sliderRange]);

	function handleToggleFilterInterests(item: string) {
		//@ts-ignore
		if (selectedItem.interests.includes(item)) {
			setSelectedItem((prevSelectedItem) => ({
				...prevSelectedItem,
				interests: prevSelectedItem.interests.filter((el) => el !== item),
			}));
		} else {
			setSelectedItem((prevSelectedItem) => ({
				...prevSelectedItem,
				interests: [...prevSelectedItem.interests, item],
			}));
		}
	}

	function handleChangeGender(item: string) {
		if (selectedItem.gender === '') {
			setSelectedItem((prevSelectedItem) => ({ ...prevSelectedItem, gender: item.toLowerCase() }));
		} else if (selectedItem.gender === item.toLowerCase()) {
			setSelectedItem((prevSelectedItem) => ({ ...prevSelectedItem, gender: '' }));
		} else {
			setSelectedItem((prevSelectedItem) => {
				if (item.toLowerCase() === EGender.Female.toLocaleLowerCase()) {
					if (prevSelectedItem.gender === EGender.Male.toLowerCase()) {
						return { ...prevSelectedItem, gender: EGender.Female.toLowerCase() };
					}
				} else {
					if (prevSelectedItem.gender === EGender.Female.toLowerCase()) {
						return { ...prevSelectedItem, gender: EGender.Male.toLowerCase() };
					}
				}
			});
		}
	}

	function handleChangeSlider(e: Array<number>) {
		setSelectedItem((prevSelectedItem) => ({ ...prevSelectedItem, range: e as [number, number] }));
	}

	return (
		<div className={style.filtration}>
			<ul>
				{itemsGender.map((group, groupIndex) => (
					<li key={groupIndex}>
						<strong className={style['filtration__label']}>Gender</strong>
						<ul>
							{group.items.map((item, itemIndex) => (
								<li
									onClick={() => handleChangeGender(item)}
									key={`${groupIndex}-${itemIndex}`}
									//@ts-ignore
									className={style['filtration-item']}
								>
									{item}
									<span
										className={cn(style.tick, {
											//@ts-ignore
											[style.tick_active]: selectedItem.gender === item.toLowerCase(),
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
						<strong className={style['filtration__label']}>Interests</strong>
						<ul className={style.filtration__interests}>
							{group.items.map((item, itemIndex) => (
								<li
									onClick={() => handleToggleFilterInterests(item)}
									key={`${groupIndex}-${itemIndex}`}
									//@ts-ignore
									className={cn(style['filtration__interests-item'], {
										[style['filtration__interests-item_active']]:
											//@ts-ignore
											selectedItem.interests.includes(item),
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
					ref={sliderRef}
					defaultValue={[selectedItem.range[0], selectedItem.range[1]]}
					min={0}
					max={100}
					step={1}
					thumbsDisabled={[false, false]}
					onInput={(e: Array<number>) => {
						setSliderRange(e);
					}}
					onThumbDragEnd={() => {
						setIsSliderInteracting(true);
						handleChangeSlider(sliderRange);
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
