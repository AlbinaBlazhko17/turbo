import Stats from '../Stats/Stats';
import Aside from '../Aside/Aside';
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

	return (
		<main>
			<h1>Dashboard</h1>
			<Stats />
			<Aside title='Top news' data={dataForNews} />
		</main>
	)
}

export default Dashboard;