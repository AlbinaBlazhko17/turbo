import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

import style from './stats.module.scss'

function Stats () {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	const data =  {
		labels: ['June', 'July', 'August', 'September', 'October'],
		datasets: [
			{
				data: [5, 8, 9, 6, 12],
				backgroundColor: [
					'#5FB3F6',
					'#5FB3F6',
					'#C7D0D8',
					'#5FB3F6',
					'#5FB3F6',
				],
			},
		]
	};

	const options = {
		plugins: {
			legend: {
				display: false,
			}
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
			}
		}
	}

	useEffect(() => {
		if (data && chartRef.current) {
			const ctx = chartRef.current.getContext('2d');

			if (chartInstance.current) {
				chartInstance.current.destroy();
			}

			chartInstance.current = new Chart(ctx, {
				type: 'bar',
				data,
				options,
			});
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
	)
}

export default Stats;