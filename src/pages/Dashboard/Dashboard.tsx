import Stats from '@components/Stats/Stats';
import Aside from '@components/Aside/Aside';
import Experts from '@components/Experts/Experts';
import Services from '@components/Services/Services';
import Marquee from '@components/Marquee/Marquee';
import Slider from '@components/Slider/Slider';
import dataForNews from '@utils/dataForNews';
import dataForLatest from '@utils/dataForLatest';
import dataForExperts from '@utils/dataForExperts';
import dataForServices from '@utils/dataForServices';

import style from './dashboard.module.scss';
import styles from '../../components/Aside/aside.module.scss';

function Dashboard() {
	return (
		<div className={style.dashboard}>
			<h1>Dashboard</h1>
			<Stats />
			<Aside title="Top news" data={dataForNews} />
			<div className={style.subgrid}>
				<Aside className={styles['aside-latest']} title="Latest topics" data={dataForLatest} />
				<Experts data={dataForExperts} />
				<Services data={dataForServices} />
			</div>

			<Marquee />
			<Slider />
		</div>
	);
}

export default Dashboard;
