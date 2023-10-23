import Stats from '../Stats/Stats';
import Aside from '../Aside/Aside';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import AsideImg from '@assets/img/aside_image.jpeg';

import './dashboard.scss';
import Marquee from '../Marquee/Marquee';

function Dashboard () {
	const dataForNews = [
		{
			img: AsideImg,
			header: 'Financial updates',
			text: 'It is a long established fact that a reader will be distracted by...'
		},
		{
			img: AsideImg,
			header: 'Financial updates',
			text: 'It is a long established fact that a reader will be distracted by...'
		},
		{
			img: AsideImg,
			header: 'Financial updates',
			text: 'It is a long established fact that a reader will be distracted by...'
		},
		{
			img: AsideImg,
			header: 'Financial updates',
			text: 'It is a long established fact that a reader will be distracted by...'
		},
		{
			img: AsideImg,
			header: 'Financial updates',
			text: 'It is a long established fact that a reader will be distracted by...'
		},
		{
			img: AsideImg,
			header: 'Financial updates',
			text: 'It is a long established fact that a reader will be distracted by...'
		},
		{
			img: AsideImg,
			header: 'Financial updates',
			text: 'It is a long established fact that a reader will be distracted by...'
		}
	];

	const dataForLatest = [
		{
			img: AsideImg,
			header: 'Will AI substitute real...',
			text: 'It is a long established fact that a reader will be distracted by...'
		},
		{
			img: AsideImg,
			header: 'Will AI substitute real...',
			text: 'It is a long established fact that a reader will be distracted by...'
		},
		{
			img: AsideImg,
			header: 'Will AI substitute real...',
			text: 'It is a long established fact that a reader will be distracted by...'
		},
		{
			img: AsideImg,
			header: 'Will AI substitute real...',
			text: 'It is a long established fact that a reader will be distracted by...'
		},
		{
			img: AsideImg,
			header: 'Will AI substitute real...',
			text: 'It is a long established fact that a reader will be distracted by...'
		},
		{
			img: AsideImg,
			header: 'Will AI substitute real...',
			text: 'It is a long established fact that a reader will be distracted by...'
		},
		{
			img: AsideImg,
			header: 'Will AI substitute real...',
			text: 'It is a long established fact that a reader will be distracted by...'
		}
	];

	return (
		<main>
			<h1>Dashboard</h1>
			<Stats />
			<Aside title='Top news' data={dataForNews} />
			<div className='subgrid'>
				<Aside className='aside-latest' title='Latest topics' data={dataForLatest} />
				<Experts />
				<Services />
			</div>

			<Marquee />
		</main>
	)
}

export default Dashboard;