import IDataForExperts from '@/interfaces/IDataForExperts';
import ExpertCard from '../ExpertCard/ExpertCard';

import style from './experts.module.scss';

function Experts ({ data }: {data: IDataForExperts[]}) {

	return (
		<section className={style.experts}>
			<h2 className={style.experts__header}>Our experts</h2>
			<div className={style.experts__wrapper}>
				{
					data.length !== 0 && data.map(expert => (
						<ExpertCard expert={expert} key={expert.id} />
					))
				}
			</div>
		</section>
	)
}

export default Experts;