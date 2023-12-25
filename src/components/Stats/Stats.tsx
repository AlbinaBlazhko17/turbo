import { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { useSelector } from 'react-redux';
import { RootState } from '@/customTypes/store.types';
import { IDataForForm } from '@/interfaces/IDataForForms';

import style from './stats.module.scss';

function Stats() {
	const chartRef = useRef<HTMLCanvasElement>(null);
	const chartInstance = useRef<Chart | null>(null);
	const [dataForChart, setDataForChart] = useState<{ label: string; number: number }[]>([
		{ label: 'January', number: 0 },
		{ label: 'February', number: 0 },
		{ label: 'March', number: 0 },
		{ label: 'April', number: 0 },
		{ label: 'May', number: 0 },
		{ label: 'June', number: 0 },
		{ label: 'July', number: 0 },
		{ label: 'August', number: 0 },
		{ label: 'September', number: 0 },
		{ label: 'October', number: 0 },
		{ label: 'November', number: 0 },
		{ label: 'December', number: 0 },
	]);
	const [data, setData] = useState();
	const [options, setOptions] = useState();
	const formData: IDataForForm[] = useSelector((state: RootState) => state.form.formData);

	useEffect(() => {
		formData.forEach((customer) => {
			const parts = customer.date.split(/[.,: ]/);
			setDataForChart((prev) => {
				const newPrev = [...prev];
				newPrev[+parts[1] - 1].number++;
				return newPrev;
			});
		});
		setData({
			labels: dataForChart.map((el) => el.label),
			datasets: [
				{
					data: dataForChart.map((el) => el.number),
					backgroundColor: ['#5FB3F6', '#5FB3F6', '#C7D0D8', '#5FB3F6', '#5FB3F6'],
				},
			],
		});
		setOptions({
			plugins: {
				legend: {
					display: false,
				},
			},
			scales: {
				x: {
					grid: {
						display: true,
						color: 'rgba(0, 0, 0, 0.1)',
						lineWidth: 1,
					},
				},
				y: {
					beginAtZero: true,
					grid: {
						display: false,
					},
				},
			},
		});
	}, []);

	useEffect(() => {
		if (data && chartRef.current) {
			const ctx = chartRef.current.getContext('2d');

			if (chartInstance.current) {
				chartInstance.current?.destroy();
			}

			if (ctx) {
				chartInstance.current = new Chart(ctx, {
					type: 'bar',
					data,
					options,
				});
			}
		}

		return () => {
			if (chartInstance.current) {
				chartInstance.current.destroy();
			}
		};
	}, [data, options]);

	return (
		<section className={style.stats}>
			<h2>Statistics</h2>
			<div className={style.stats__diagram}>
				<canvas ref={chartRef} />
			</div>
		</section>
	);
}

export default Stats;
