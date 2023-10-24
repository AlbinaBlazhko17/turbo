function ExpertCard({ expert }) {
	return (
		<article className="experts__item">
			<div><img src={expert.img} alt={expert.name}/></div>
			<div className="experts__item-descr">
				<h3 className="experts__item-name">{expert.name}</h3>
				<h4 className="experts__item-pos">{expert.pos}</h4>
				<p className="experts__item-exp">{expert.exp}</p>
			</div>
		</article>
	)
}

export default ExpertCard;