import Stats from '../../components/Stats/Stats';
import Aside from '../../components/Aside/Aside';
import Experts from '../../components/Experts/Experts';
import Services from '../../components/Services/Services';
import Marquee from '../../components/Marquee/Marquee';
import Slider from '../../components/Slider/Slider';
import AsideImg from '@assets/img/aside_image.jpeg';

import './dashboard.scss';

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
			<Slider />
		</main>
	)
}

export default Dashboard;