import { Aside, Experts, Marquee, Services, Slider, Stats } from '@/components';
import dataForExperts from '@utils/dataForExperts';
import { getRecentNews, getTopNews } from '@utils/dataForNews';
import dataForServices from '@utils/dataForServices';
import { useEffect, useState } from 'react';

import styles from '../../components/Aside/aside.module.scss';
import style from './dashboard.module.scss';

function Dashboard() {
	const [topNews, setTopNews] = useState([]);
	const [recentNews, setRecentNews] = useState([]);
	useEffect(() => {
		(async () => {
			const dataForTop = await getTopNews();
			const dataForRecent = await getRecentNews();
			setRecentNews(dataForRecent);
			setTopNews(dataForTop);
		})();
	}, []);
	return (
		<div className={style.dashboard}>
			<h1>Dashboard</h1>
			<Stats />
			<Aside title="Top news" data={topNews} />
			<div className={style.subgrid}>
				<Aside className={styles['aside-latest']} title="Latest news" data={recentNews} />
				<Experts data={dataForExperts} />
				<Services data={dataForServices} />
			</div>

			<Marquee />
			<Slider />
		</div>
	);
}

export default Dashboard;
