import IDataForExperts from '@interfaces/IDataForExperts';

import style from '../Experts/experts.module.scss'

function ExpertCard({ expert }: {expert: IDataForExperts}) {
	return (
		<article className={style.experts__item}>
			<div><img src={expert.img} alt={expert.name}/></div>
			<div className={style['experts__item-descr']}>
				<h3 className={style['experts__item-name']}>{expert.name}</h3>
				<h4 className={style['experts__item-pos']}>{expert.pos}</h4>
				<p className={style['experts__item-exp']}>{expert.exp}</p>
			</div>
		</article>
	)
}

export default ExpertCard;